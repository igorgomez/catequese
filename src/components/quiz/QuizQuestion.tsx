import React, { useState } from 'react';
import { Question } from '../../types';
import Button from '../common/Button';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const isCorrect = selectedOption === question.correctOption;

  const handleOptionClick = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null) return;
    setAnswered(true);
    onAnswer(isCorrect);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-blue-600 mb-4">{question.text}</h3>
      
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 
              ${selectedOption === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}
              ${answered && index === question.correctOption ? 'border-green-500 bg-green-50' : ''}
              ${answered && index === selectedOption && index !== question.correctOption ? 'border-red-500 bg-red-50' : ''}
            `}
          >
            <span className="text-gray-700">{option}</span>
          </div>
        ))}
      </div>

      {!answered ? (
        <Button 
          onClick={handleConfirm} 
          disabled={selectedOption === null}
          fullWidth
          className={selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}
        >
          Confirmar Resposta
        </Button>
      ) : (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-semibold">
            {isCorrect ? 'Parabéns! Você acertou!' : 'Ops! Resposta incorreta.'}
          </p>
          <p className="mt-2">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;