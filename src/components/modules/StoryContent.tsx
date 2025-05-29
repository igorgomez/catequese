import React from 'react';
import { StoryPage } from '../../types';

interface StoryContentProps {
  page: StoryPage;
}

const StoryContent: React.FC<StoryContentProps> = ({ page }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 animate-fadeIn">
      <div className="md:w-1/2">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={page.image}
            alt={page.title}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{page.title}</h2>
        <div className="prose max-w-none bg-white p-6 rounded-xl shadow-md flex-grow">
          {page.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryContent;