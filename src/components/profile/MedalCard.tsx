import React from 'react';
import { Medal, Lock } from 'lucide-react';
import { ModuleType } from '../../types';

interface MedalCardProps {
  module: ModuleType;
  earned: boolean;
}

const MedalCard: React.FC<MedalCardProps> = ({ module, earned }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-4 text-center ${earned ? 'border-2 border-yellow-400' : 'opacity-80'}`}>
      <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
        {earned ? (
          <Medal className="h-8 w-8 text-yellow-500\" fill="currentColor" />
        ) : (
          <Lock className="h-8 w-8 text-gray-400" />
        )}
      </div>
      <h3 className="font-semibold text-gray-800 mb-1">{module.title}</h3>
      <p className="text-xs text-gray-500">
        {earned ? 'Conquistada!' : 'Não conquistada'}
      </p>
    </div>
  );
};

export default MedalCard;