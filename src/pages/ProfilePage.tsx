import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Award } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { getModules } from '../data/modules';
import MedalCard from '../components/profile/MedalCard';
import ProgressStats from '../components/profile/ProgressStats';

const ProfilePage: React.FC = () => {
  const { medals } = useProgress();
  const modules = getModules();

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Módulos
        </Link>
      </div>

      <div className="mb-8 flex items-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <User className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Meu Perfil</h1>
          <p className="text-gray-600">Acompanhe seu progresso na jornada de catequese</p>
        </div>
      </div>

      <ProgressStats />

      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
          <Award className="h-6 w-6 mr-2 text-blue-500" />
          Minhas Medalhas
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {modules.map((module) => (
            <MedalCard 
              key={module.id} 
              module={module} 
              earned={!!medals[module.id]} 
            />
          ))}
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-xl">
        <h3 className="font-semibold text-blue-800 mb-2">Dica!</h3>
        <p className="text-blue-700 text-sm">
          Continue estudando os módulos e completando os quizzes para ganhar todas as medalhas. 
          Seu progresso é salvo automaticamente em seu dispositivo.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;