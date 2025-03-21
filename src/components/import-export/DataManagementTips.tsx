
import React from 'react';
import { Check, AlertCircle, Info, Calendar } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const DataManagementTips: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <Card isGlass className="p-6">
        <div className="flex items-center mb-4">
          <Info className="mr-2 h-5 w-5 text-primary" />
          <h2 className="text-lg font-medium">Data Management Tips</h2>
        </div>
        
        <div className={`${isMobile ? 'space-y-4' : 'grid grid-cols-3 gap-4'}`}>
          <div className="flex p-3 rounded-lg bg-primary-light/40">
            <div className="mr-3 text-green-500">
              <Check size={18} />
            </div>
            <div>
              <p className="text-sm font-medium">Regular Backups</p>
              <p className="text-xs text-muted-foreground">We recommend exporting your data at least once a month for backup purposes.</p>
            </div>
          </div>
          
          <div className="flex p-3 rounded-lg bg-secondary-light/40">
            <div className="mr-3 text-primary">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-sm font-medium">Compatible Formats</p>
              <p className="text-xs text-muted-foreground">SmartBook supports imports from CSV, Excel (.xlsx, .xls), and JSON files.</p>
            </div>
          </div>
          
          <div className="flex p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20">
            <div className="mr-3 text-amber-500">
              <AlertCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-medium">Data Validation</p>
              <p className="text-xs text-muted-foreground">Always check your data after import to ensure everything was imported correctly.</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default DataManagementTips;
