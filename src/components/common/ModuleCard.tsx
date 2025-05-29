import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import { ModuleType } from '../../types';

interface ModuleCardProps {
  module: ModuleType;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const { medals } = useProgress();
  const completed = medals[module.id];

  return (
    <Link 
      to={`/modulo/${module.id}`}
      className={`block h-full rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 
                  ${completed ? 'border-2 border-yellow-400' : 'border border-gray-200'}`}
    >
      <div className="relative">
        <img 
          src={module.coverImage} 
          alt={module.title} 
          className="w-full h-48 object-cover"
        />
        {completed && (
          <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1">
            <CheckCircle className="h-6 w-6 text-white\" fill="white" />
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold text-blue-600 mb-2">{module.title}</h3>
        <p className="text-gray-600 text-sm">{module.description}</p>
      </div>
    </Link>
  );
};

export default ModuleCard;