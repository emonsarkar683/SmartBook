
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
        'rounded-xl shadow-sm p-4 bg-card border border-border/40',
        isGlass && 'backdrop-blur-md bg-background/70',
        isHoverable && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
