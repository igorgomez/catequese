import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';

const Header: React.FC = () => {
  const { medals } = useProgress();
  const totalMedals = Object.values(medals).filter(Boolean).length;

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-blue-600 text-xl font-bold">
          <BookOpen className="h-6 w-6" />
          <span>Catequese Conectada</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/perfil" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold">{totalMedals}</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <span className="hidden sm:inline">Meu Progresso</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;