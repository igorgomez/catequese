import React from 'react';
import { Link } from 'react-router-dom';
import { Medal, Home } from 'lucide-react';
import Button from '../common/Button';
import { ModuleType } from '../../types';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  module: ModuleType;
  earned: boolean;
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, module, earned }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">Quiz Concluído!</h2>
      <p className="text-gray-600 mb-6">Você completou o quiz sobre {module.title}</p>
      
      <div className="mb-8">
        <div className="relative w-40 h-40 mx-auto">
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <div 
            className="absolute inset-0 rounded-full border-8 border-blue-500 transition-all duration-1000"
            style={{ 
              clipPath: `polygon(50% 50%, 50% 0%, ${percentage >= 25 ? '100% 0%' : `${50 + percentage * 2}% 0%`}, ${percentage >= 50 ? '100% 100%' : `100% ${percentage * 2}%`}, ${percentage >= 75 ? '0% 100%' : `${100 - percentage * 2}% 100%`}, ${percentage >= 100 ? '0% 0%' : `0% ${100 - percentage * 2}%`}, 50% 0%, 50% 50%)` 
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold text-blue-600">{percentage}%</span>
            <span className="text-sm text-gray-500">{score}/{totalQuestions}</span>
          </div>
        </div>
      </div>

      {earned && (
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center animate-bounce-slow">
            <Medal className="h-10 w-10 text-yellow-500" fill="currentColor" />
          </div>
          <p className="text-lg font-semibold text-yellow-600 mt-4">
            Parabéns! Você ganhou uma medalha!
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/">
          <Button variant="secondary">
            <Home className="mr-2 h-5 w-5" />
            Início
          </Button>
        </Link>
        <Link to="/perfil">
          <Button>
            Ver Meu Progresso
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuizResults;