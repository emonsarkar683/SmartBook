
import React from 'react';
import { cn } from '@/lib/utils';
import Card from './Card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon,
  trend, 
  className 
}) => {
  return (
    <Card 
      isGlass 
      isHoverable 
      className={cn('flex flex-col h-full', className)}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-muted-foreground mb-1">{title}</div>
          <div className="text-2xl font-semibold">{value}</div>
          
          {trend && (
            <div className={cn(
              "mt-1 text-xs flex items-center", 
              trend.isPositive ? "text-emerald-500" : "text-rose-500"
            )}>
              <span>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="ml-1 text-muted-foreground">vs last period</span>
            </div>
          )}
        </div>
        
        <div className="bg-primary-light p-2 rounded-full text-primary">
          <Icon size={18} />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
