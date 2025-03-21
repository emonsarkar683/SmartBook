
import React, { useState } from 'react';
import { Upload, FileText, FileWarning } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Card from '@/components/ui-custom/Card';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const ImportSection: React.FC = () => {
  const { notification } = useApp();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleImport = () => {
    if (!selectedFile) {
      notification('Please select a file to import', 'error');
      return;
    }

    setIsImporting(true);
    setTimeout(() => {
      setIsImporting(false);
      notification('Data imported successfully', 'success');
      setSelectedFile(null);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Card isGlass className="p-6">
        <div className="flex items-center mb-4">
          <Upload className="mr-2 h-5 w-5 text-primary" />
          <h2 className="text-lg font-medium">Import Data</h2>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Import your existing business data from CSV, Excel, or other accounting software exports.
        </p>
        
        <div 
          className={`mb-4 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive ? 'border-primary bg-primary-light/20' : 'border-muted'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {selectedFile ? (
            <div className="flex flex-col items-center">
              <FileText size={36} className="text-primary mb-2" />
              <p className="text-sm font-medium">{selectedFile.name}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setSelectedFile(null)}
                className="mt-2"
              >
                Remove File
              </Button>
            </div>
          ) : (
            <div>
              <FileWarning size={36} className="mx-auto text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Drag and drop your file here</p>
              <p className="text-xs text-muted-foreground mb-2">or</p>
              <Input 
                type="file" 
                accept=".csv,.xlsx,.xls,.json" 
                onChange={handleFileChange}
                className="max-w-xs mx-auto"
              />
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleImport} 
          disabled={!selectedFile || isImporting}
          className="w-full"
        >
          {isImporting ? "Processing Import..." : "Import Data"}
        </Button>
      </Card>
    </motion.div>
  );
};

export default ImportSection;
