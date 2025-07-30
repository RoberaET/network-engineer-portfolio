'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GlassIconItem {
  icon: React.ReactNode;
  color: string;
  label: string;
  onClick?: () => void;
}

interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600',
      orange: 'from-orange-500 to-orange-600',
      green: 'from-green-500 to-green-600',
      gray: 'from-gray-500 to-gray-600',
      white: 'from-white to-gray-100',
    };
    return colorMap[color] || 'from-blue-500 to-blue-600';
  };

  const getIconColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'text-blue-500',
      purple: 'text-purple-500',
      red: 'text-red-500',
      indigo: 'text-indigo-500',
      orange: 'text-orange-500',
      green: 'text-green-500',
      gray: 'text-gray-500',
      white: 'text-white',
    };
    return colorMap[color] || 'text-blue-500';
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative group"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          onClick={item.onClick}
        >
          <motion.div
            className={`
              relative w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20
              flex items-center justify-center cursor-pointer transition-all duration-300
              hover:bg-white/20 hover:border-white/30 hover:scale-110
              ${hoveredIndex === index ? 'shadow-2xl' : 'shadow-lg'}
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient background */}
            <div className={`
              absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClasses(item.color)}
              opacity-0 group-hover:opacity-20 transition-opacity duration-300
            `} />
            
            {/* Icon */}
            <div className={`relative z-10 text-2xl ${getIconColor(item.color)}`}>
              {item.icon}
            </div>
            
            {/* Glow effect */}
            <div className={`
              absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClasses(item.color)}
              opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300
            `} />
          </motion.div>
          
          {/* Label */}
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1
                         bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm whitespace-nowrap"
            >
              {item.label}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GlassIcons; 