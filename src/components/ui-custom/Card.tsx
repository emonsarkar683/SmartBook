
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isGlass?: boolean;
  isHoverable?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  isGlass = false, 
  isHoverable = false, 
  className, 
  children, 
  ...props 
}) => {
  return (
    <div
      className={cn(
        'rounded-lg shadow-card p-4',
        isGlass && 'glass-panel',
        isHoverable && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
