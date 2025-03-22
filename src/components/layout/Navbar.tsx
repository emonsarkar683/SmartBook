
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Package2, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from '@/hooks/use-mobile';

// Reduced to only 5 main items
const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/customers', label: 'Customers', icon: Users },
  { path: '/invoices', label: 'Invoices', icon: FileText },
  { path: '/inventory', label: 'Inventory', icon: Package2 },
  { path: '/settings', label: 'Settings', icon: Settings },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  return (
    <nav className="flex justify-center fixed bottom-0 left-0 right-0 z-10 p-2 bg-background/80 backdrop-blur-lg border-t border-border shadow-lg overflow-x-auto">
      <div className="flex justify-around items-center w-full max-w-xl">
        <TooltipProvider>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Tooltip key={item.path} delayDuration={300}>
                <TooltipTrigger asChild>
                  <NavLink 
                    to={item.path}
                    className="relative p-3 flex flex-col items-center text-xs"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-xl bg-primary/10 z-0"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    <Icon 
                      size={isMobile ? 22 : 20} 
                      className={cn(
                        "relative z-10", 
                        isActive ? "text-primary" : "text-muted-foreground"
                      )} 
                    />
                    
                    <span 
                      className={cn(
                        "mt-1 text-[11px] font-medium relative z-10 transition-opacity duration-200 ease-in-out", 
                        isActive ? "text-primary" : "text-muted-foreground",
                        isMobile ? "opacity-100" : "xs:opacity-100 opacity-0"
                      )}
                    >
                      {item.label}
                    </span>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent className="xs:hidden">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Navbar;
