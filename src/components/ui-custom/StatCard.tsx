
import React from 'react';
import { cn } from '@/lib/utils';
import Card from './Card';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon,
  trend, 
  className,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card 
        isGlass 
        isHoverable 
        className={cn('flex flex-col h-full', className)}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">{title}</div>
            <div className="text-2xl font-bold">{value}</div>
            
            {trend && (
              <div className={cn(
                "mt-1 text-xs flex items-center", 
                trend.isPositive ? "text-emerald-500" : "text-rose-500"
              )}>
                <span className="font-medium">
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
                <span className="ml-1 text-muted-foreground">vs last period</span>
              </div>
            )}
          </div>
          
          <div className="bg-primary/10 p-2.5 rounded-full text-primary">
            <Icon size={20} strokeWidth={1.75} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default StatCard;
