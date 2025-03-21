
import React from 'react';
import { motion } from 'framer-motion';
import ImportSection from '@/components/import-export/ImportSection';
import ExportSection from '@/components/import-export/ExportSection';
import DataManagementTips from '@/components/import-export/DataManagementTips';
import { Database } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ImportExportPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6">
      <header className="mb-6">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Database className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Import & Export</h1>
        </motion.div>
        <motion.p 
          className="text-muted-foreground mt-1 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Safely transfer your business data to and from SmartBook
        </motion.p>
      </header>

      <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-6`}>
        <ImportSection />
        <ExportSection />
      </div>

      <DataManagementTips />
    </div>
  );
};

export default ImportExportPage;
