import React from 'react';
import { useProgress } from '../../contexts/ProgressContext';
import { getModules } from '../../data/modules';

const ProgressStats: React.FC = () => {
  const { medals } = useProgress();
  const modules = getModules();
  
  const totalMedals = Object.values(medals).filter(Boolean).length;
  const totalModules = modules.length;
  const percentage = Math.round((totalMedals / totalModules) * 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Meu Progresso</h2>
      
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#E5E7EB" 
              strokeWidth="10" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="10" 
              strokeLinecap="round" 
              strokeDasharray={`${percentage * 2.83} 283`} 
              transform="rotate(-90 50 50)" 
            />
            <text 
              x="50" 
              y="50" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fontSize="24" 
              fontWeight="bold" 
              fill="#3B82F6"
            >
              {percentage}%
            </text>
          </svg>
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">Medalhas Conquistadas</p>
              <p className="text-2xl font-bold text-blue-600">{totalMedals}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">Total de Módulos</p>
              <p className="text-2xl font-bold text-blue-600">{totalModules}</p>
            </div>
          </div>
          
          <p className="mt-4 text-gray-600 text-sm">
            Continue seu aprendizado para conquistar todas as medalhas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;