
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PageTransition from '../ui-custom/PageTransition';

const AppLayout: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="app-container">
      <div className="flex flex-col h-full">
        <main className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <div className="page-container">
                <Outlet />
              </div>
            </PageTransition>
          </AnimatePresence>
        </main>
        <Navbar />
      </div>
    </div>
  );
};

export default AppLayout;
