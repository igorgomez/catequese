import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-1 text-sm">
          Catequese Conectada {currentYear} - Feito com 
          <Heart className="h-4 w-4 text-red-400 animate-pulse" fill="currentColor" /> 
          para nossas crianças
        </p>
      </div>
    </footer>
  );
};

export default Footer;