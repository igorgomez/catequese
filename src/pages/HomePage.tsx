import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { getModules } from '../data/modules';
import ModuleCard from '../components/common/ModuleCard';
import { BookOpen, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const modules = getModules();
  const { medals } = useProgress();
  const completedModules = Object.values(medals).filter(Boolean).length;

  return (
    <div className="animate-fadeIn">
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Catequese Conectada
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bem-vindo à jornada de preparação para a Primeira Comunhão! 
          Explore os módulos, aprenda com histórias interativas e teste seus conhecimentos.
        </p>

        {completedModules > 0 && (
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">
            <Star className="h-5 w-5 mr-2 text-yellow-500" fill="currentColor" />
            <span>Você já completou {completedModules} de {modules.length} módulos!</span>
          </div>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-blue-500" />
          Módulos de Aprendizado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-6 shadow-inner">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Leia as Histórias</h3>
            <p className="text-gray-600 text-sm">Explore histórias bíblicas interativas com textos e imagens.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Responda aos Quizzes</h3>
            <p className="text-gray-600 text-sm">Teste seus conhecimentos com perguntas divertidas sobre o que aprendeu.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Ganhe Medalhas</h3>
            <p className="text-gray-600 text-sm">Complete os módulos e colecione medalhas no seu perfil.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;