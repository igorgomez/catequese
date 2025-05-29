import React from 'react';

interface BadgeProps {
  text: string;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  const colorVariants = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colorVariants[color]}`}>
      {text}
    </span>
  );
};

export default Badge;