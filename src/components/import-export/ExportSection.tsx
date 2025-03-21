
import React, { useState } from 'react';
import { Download, FileText, BarChart, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui-custom/Card';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const ExportSection: React.FC = () => {
  const { notification } = useApp();
  const [exportType, setExportType] = useState<string>('');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleExport = (type: string) => {
    setExportType(type);
    setIsExporting(true);

    setTimeout(() => {
      setIsExporting(false);
      notification(`${type} data exported successfully`, 'success');
      
      // Simulate file download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(new Blob(['Mock data export content'], { type: 'text/plain' }));
      link.download = `smartbook_${type.toLowerCase()}_export.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <Card isGlass className="p-6">
        <div className="flex items-center mb-4">
          <Download className="mr-2 h-5 w-5 text-primary" />
          <h2 className="text-lg font-medium">Export Data</h2>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Export your business data for backup or use in other applications.
        </p>
        
        <div className="space-y-3">
          <Button 
            variant="outline" 
            onClick={() => handleExport('Customers')}
            disabled={isExporting}
            className="w-full justify-between"
          >
            <span className="flex items-center">
              <Users className="mr-2 h-4 w-4" /> Customers & Vendors
            </span>
            <Download className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => handleExport('Invoices')}
            disabled={isExporting}
            className="w-full justify-between"
          >
            <span className="flex items-center">
              <FileText className="mr-2 h-4 w-4" /> Invoices & Memos
            </span>
            <Download className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => handleExport('Inventory')}
            disabled={isExporting}
            className="w-full justify-between"
          >
            <span className="flex items-center">
              <Database className="mr-2 h-4 w-4" /> Inventory
            </span>
            <Download className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => handleExport('Reports')}
            disabled={isExporting}
            className="w-full justify-between"
          >
            <span className="flex items-center">
              <BarChart className="mr-2 h-4 w-4" /> Financial Reports
            </span>
            <Download className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => handleExport('All')}
            disabled={isExporting}
            className="w-full justify-between"
          >
            <span className="flex items-center">
              <Database className="mr-2 h-4 w-4" /> All Data
            </span>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ExportSection;
