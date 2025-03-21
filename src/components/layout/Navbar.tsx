
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Package2, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  
  return (
    <nav className="flex justify-center fixed bottom-0 left-0 right-0 z-10 p-1 bg-background/70 backdrop-blur-lg border-t border-border overflow-x-auto">
      <div className="flex justify-around items-center w-full max-w-3xl">
        <TooltipProvider>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Tooltip key={item.path}>
                <TooltipTrigger asChild>
                  <NavLink 
                    to={item.path}
                    className="relative p-3 flex flex-col items-center text-xs"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-xl bg-primary-light z-0"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    <Icon 
                      size={20} 
                      className={cn(
                        "relative", 
                        isActive ? "text-primary" : "text-muted-foreground"
                      )} 
                    />
                    
                    <span 
                      className={cn(
                        "mt-1 text-[10px] font-medium relative hidden xs:inline-block", 
                        isActive ? "text-primary" : "text-muted-foreground"
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
