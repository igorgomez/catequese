import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../common/Button';

interface StoryNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const StoryNavigation: React.FC<StoryNavigationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <Button
        variant="secondary"
        onClick={onPrevious}
        disabled={currentPage === 0}
        className={currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}
      >
        <ChevronLeft className="mr-1 h-5 w-5" />
        Anterior
      </Button>

      <div className="text-gray-600 text-sm">
        {currentPage + 1} de {totalPages}
      </div>

      <Button
        variant="primary"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}
      >
        Próximo
        <ChevronRight className="ml-1 h-5 w-5" />
      </Button>
    </div>
  );
};

export default StoryNavigation;