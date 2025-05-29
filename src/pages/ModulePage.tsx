import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Medal } from 'lucide-react';
import { getModuleById } from '../data/modules';
import StoryContent from '../components/modules/StoryContent';
import StoryNavigation from '../components/modules/StoryNavigation';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { useProgress } from '../contexts/ProgressContext';

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { medals } = useProgress();
  const [currentPage, setCurrentPage] = useState(0);
  
  const module = moduleId ? getModuleById(moduleId) : undefined;
  const totalPages = module?.story.length || 0;
  const completed = moduleId ? medals[moduleId] : false;

  useEffect(() => {
    if (!module) {
      navigate('/');
    }
  }, [module, navigate]);

  if (!module) {
    return <div>Carregando...</div>;
  }

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    window.scrollTo(0, 0);
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Módulos
        </Link>
        
        {completed && (
          <div className="flex items-center">
            <Medal className="h-5 w-5 mr-2 text-yellow-500" fill="currentColor" />
            <span className="text-yellow-600">Módulo Completo</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{module.title}</h1>
        <div className="flex items-center">
          <Badge text="Conto Interativo" color="blue" />
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600 text-sm">{module.story.length} páginas</span>
        </div>
      </div>

      <StoryContent page={module.story[currentPage]} />
      
      <StoryNavigation 
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {currentPage === totalPages - 1 && (
        <div className="mt-8 flex justify-center">
          <Link to={`/quiz/${moduleId}`}>
            <Button size="lg" className="animate-pulse">
              <Brain className="h-5 w-5 mr-2" />
              Iniciar Quiz
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ModulePage;