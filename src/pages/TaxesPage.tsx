
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TaxesPage: React.FC = () => {
  // Mock tax rates data
  const taxRates = [
    { id: 'TAX-001', name: 'Standard Sales Tax', rate: 8.25, type: 'Percentage', applies_to: 'All Products' },
    { id: 'TAX-002', name: 'Digital Goods Tax', rate: 6.75, type: 'Percentage', applies_to: 'Digital Products' },
    { id: 'TAX-003', name: 'Food & Beverage', rate: 4.0, type: 'Percentage', applies_to: 'Food Items' },
    { id: 'TAX-004', name: 'Environmental Fee', rate: 5.00, type: 'Fixed', applies_to: 'Electronics' },
    { id: 'TAX-005', name: 'Luxury Tax', rate: 10.0, type: 'Percentage', applies_to: 'Premium Products' },
  ];

  // Mock tax periods data
  const taxPeriods = [
    { period: 'Q1 2023', start_date: 'Jan 1, 2023', end_date: 'Mar 31, 2023', total_tax: 12458.75, status: 'Filed' },
    { period: 'Q2 2023', start_date: 'Apr 1, 2023', end_date: 'Jun 30, 2023', total_tax: 15782.50, status: 'Due' },
    { period: 'Q3 2023', start_date: 'Jul 1, 2023', end_date: 'Sep 30, 2023', total_tax: 0, status: 'Upcoming' },
    { period: 'Q4 2023', start_date: 'Oct 1, 2023', end_date: 'Dec 31, 2023', total_tax: 0, status: 'Upcoming' },
  ];

  // Function to get status color for tax periods
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Filed': return 'bg-green-100 text-green-700';
      case 'Due': return 'bg-yellow-100 text-yellow-700';
      case 'Upcoming': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
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
          Manage tax rates and tax reporting
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Tabs defaultValue="rates">
          <TabsList className="mb-4">
            <TabsTrigger value="rates">Tax Rates</TabsTrigger>
            <TabsTrigger value="periods">Tax Periods</TabsTrigger>
            <TabsTrigger value="reports">Tax Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rates" className="space-y-4">
            <div className="flex justify-end">
              <Button size="sm" className="gap-1">
                <PlusCircle className="h-4 w-4" />
                Add Tax Rate
              </Button>
            </div>
            
            <Card isGlass className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium">ID</th>
                      <th className="pb-3 font-medium">Name</th>
                      <th className="pb-3 font-medium text-right">Rate</th>
                      <th className="pb-3 font-medium">Type</th>
                      <th className="pb-3 font-medium">Applies To</th>
                      <th className="pb-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxRates.map((tax) => (
                      <tr key={tax.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                        <td className="py-3">{tax.id}</td>
                        <td className="py-3">{tax.name}</td>
                        <td className="py-3 text-right">
                          {tax.type === 'Percentage' ? `${tax.rate.toFixed(2)}%` : `$${tax.rate.toFixed(2)}`}
                        </td>
                        <td className="py-3">{tax.type}</td>
                        <td className="py-3">{tax.applies_to}</td>
                        <td className="py-3 text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="periods" className="space-y-4">
            <Card isGlass className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium">Period</th>
                      <th className="pb-3 font-medium">Date Range</th>
                      <th className="pb-3 font-medium text-right">Total Tax</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxPeriods.map((period, index) => (
                      <tr key={index} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                        <td className="py-3">{period.period}</td>
                        <td className="py-3">{period.start_date} - {period.end_date}</td>
                        <td className="py-3 text-right">
                          ${period.total_tax.toFixed(2)}
                        </td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(period.status)}`}>
                            {period.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <Button variant="ghost" size="sm" disabled={period.status === 'Upcoming'}>
                            {period.status === 'Filed' ? 'View' : period.status === 'Due' ? 'File' : 'N/A'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-4">
            <div className="flex items-center justify-end gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Calendar className="h-4 w-4" />
                Select Period
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
            
            <Card isGlass className="p-6 text-center">
              <div className="py-8">
                <h3 className="text-lg font-medium mb-2">Select a Tax Period</h3>
                <p className="text-muted-foreground">Choose a tax period to generate and view tax reports</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default TaxesPage;
