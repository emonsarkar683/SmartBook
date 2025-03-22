
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Search, Plus, Edit, Trash2, Percent } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const TaxesPage: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Mock tax data
  const taxes = [
    { id: 1, name: 'State Sales Tax', rate: 6.25, type: 'sales', applies_to: 'All goods', status: 'active' },
    { id: 2, name: 'VAT', rate: 20.00, type: 'value-added', applies_to: 'Services', status: 'active' },
    { id: 3, name: 'City Tax', rate: 1.50, type: 'local', applies_to: 'All transactions', status: 'active' },
    { id: 4, name: 'Import Duty', rate: 5.00, type: 'customs', applies_to: 'Imported goods', status: 'inactive' },
    { id: 5, name: 'Special Assessment', rate: 2.75, type: 'special', applies_to: 'Luxury items', status: 'active' },
  ];
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>;
      case 'inactive':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Inactive</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <motion.h1 
          className="text-2xl font-bold mb-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Taxes
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage tax rates and tax rules for your invoices
        </motion.p>
      </header>

      <motion.div 
        className="flex flex-col sm:flex-row justify-between gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Search taxes..."
          />
        </div>
        
        <Button size="sm" className="gap-1">
          <Plus className="h-4 w-4" />
          <span className={isMobile ? "sr-only" : ""}>Add Tax Rate</span>
        </Button>
      </motion.div>

      <Card isGlass className="p-6">
        <div className="overflow-x-auto -mx-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 pl-6 font-medium">Name</th>
                <th className="pb-3 font-medium text-right">Rate</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium hidden md:table-cell">Applies To</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 pr-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {taxes.map((tax) => (
                <tr key={tax.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="py-3 pl-6 font-medium">{tax.name}</td>
                  <td className="py-3 text-right">
                    <div className="inline-flex items-center">
                      {tax.rate}%
                      <Percent className="ml-1 h-3 w-3 text-muted-foreground" />
                    </div>
                  </td>
                  <td className="py-3 capitalize">{tax.type}</td>
                  <td className="py-3 hidden md:table-cell">{tax.applies_to}</td>
                  <td className="py-3">{getStatusBadge(tax.status)}</td>
                  <td className="py-3 pr-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Edit</span>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Delete</span>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Tax Settings</h2>
        <Card isGlass className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div>
                <p className="font-medium">Enable Tax Calculation</p>
                <p className="text-sm text-muted-foreground">Apply taxes to invoices automatically</p>
              </div>
              <Button variant="outline">Enabled</Button>
            </div>
            
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div>
                <p className="font-medium">Default Tax Rate</p>
                <p className="text-sm text-muted-foreground">The tax rate applied by default</p>
              </div>
              <div className="flex items-center">
                <span className="mr-3">State Sales Tax (6.25%)</span>
                <Button variant="outline" size="sm">Change</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div>
                <p className="font-medium">Tax Number Display</p>
                <p className="text-sm text-muted-foreground">Show tax identification number on invoices</p>
              </div>
              <Button variant="outline">Show</Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Tax Calculation Method</p>
                <p className="text-sm text-muted-foreground">How taxes are calculated on invoices</p>
              </div>
              <Button variant="outline">Item by Item</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TaxesPage;
