import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getModuleById } from '../data/modules';
import QuizQuestion from '../components/quiz/QuizQuestion';
import QuizResults from '../components/quiz/QuizResults';
import { useProgress } from '../contexts/ProgressContext';

const QuizPage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { medals, awardMedal } = useProgress();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  
  const module = moduleId ? getModuleById(moduleId) : undefined;
  const questions = module?.quiz || [];
  const totalQuestions = questions.length;
  const hasEarnedBefore = moduleId ? medals[moduleId] : false;
  const [earnedNew, setEarnedNew] = useState(false);

  useEffect(() => {
    if (!module) {
      navigate('/');
    }
  }, [module, navigate]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    // Wait a bit for the user to see the feedback
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
        window.scrollTo(0, 0);
      } else {
        finishQuiz();
      }
    }, 1500);
  };

  const finishQuiz = () => {
    setCompleted(true);
    
    // Award medal if score is at least 60%
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 60 && moduleId && !hasEarnedBefore) {
      awardMedal(moduleId);
      setEarnedNew(true);
    }
  };

  if (!module) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="animate-fadeIn">
      {!completed ? (
        <div>
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-blue-600 mb-2">
              Quiz: {module.title}
            </h1>
            <div className="text-gray-600 mb-4">
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${((currentQuestion) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          <QuizQuestion 
            question={questions[currentQuestion]} 
            onAnswer={handleAnswer} 
          />
        </div>
      ) : (
        <QuizResults 
          score={score}
          totalQuestions={totalQuestions}
          module={module}
          earned={!hasEarnedBefore && earnedNew}
        />
      )}
    </div>
  );
};

export default QuizPage;