
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Percent, 
  Plus, 
  FileText, 
  Calculator, 
  Calendar, 
  Clock, 
  Settings 
} from 'lucide-react';

const TaxesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Percent className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Taxes</h1>
        </motion.div>
        <motion.p 
          className="text-muted-foreground mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage tax rates, settings, and generate tax reports
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Tabs defaultValue="tax-rates">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="tax-rates" className="flex items-center gap-2">
              <Percent className="h-4 w-4" /> Tax Rates
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Reports
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" /> Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tax-rates" className="mt-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Tax Rates</h2>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Tax Rate
              </Button>
            </div>
            
            <Card isGlass className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Rate</th>
                      <th className="text-left py-3 px-4 font-medium">Type</th>
                      <th className="text-left py-3 px-4 font-medium">Region</th>
                      <th className="text-right py-3 px-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Standard VAT', rate: '20%', type: 'Value Added Tax', region: 'United Kingdom' },
                      { name: 'Reduced VAT', rate: '5%', type: 'Value Added Tax', region: 'United Kingdom' },
                      { name: 'Sales Tax', rate: '8.875%', type: 'Sales Tax', region: 'New York, US' },
                      { name: 'GST', rate: '10%', type: 'Goods & Services Tax', region: 'Australia' },
                      { name: 'PST', rate: '7%', type: 'Provincial Sales Tax', region: 'British Columbia, CA' },
                    ].map((tax, index) => (
                      <tr key={index} className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                        <td className="py-3 px-4 font-medium">{tax.name}</td>
                        <td className="py-3 px-4">{tax.rate}</td>
                        <td className="py-3 px-4">{tax.type}</td>
                        <td className="py-3 px-4">{tax.region}</td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6 space-y-6">
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Tax Reports</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Quarterly VAT Return', icon: Calendar },
                    { name: 'Annual Tax Summary', icon: FileText },
                    { name: 'Sales Tax Report', icon: Calculator },
                  ].map((report, index) => (
                    <div 
                      key={index}
                      className="p-4 border border-border/40 rounded-lg hover:border-primary/60 hover:bg-primary/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 rounded-full p-2 mt-1">
                          <report.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{report.name}</h3>
                          <p className="text-sm text-muted-foreground">Generate or view report</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Card className="p-4 bg-muted/30">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    Recent Reports
                  </h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Q1 VAT Return', date: '2023-04-15', status: 'Completed' },
                      { name: '2022 Annual Tax Summary', date: '2023-01-31', status: 'Completed' },
                    ].map((report, index) => (
                      <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div>
                          <div className="font-medium">{report.name}</div>
                          <div className="text-xs text-muted-foreground">{report.date}</div>
                        </div>
                        <div>
                          <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                            {report.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Tax Settings</h2>
              <p className="text-muted-foreground mb-6">
                Configure your tax calculation preferences and settings.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border-b border-border/20">
                  <div>
                    <h3 className="font-medium">Automatic Tax Calculation</h3>
                    <p className="text-sm text-muted-foreground">Calculate taxes automatically on invoices</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border-b border-border/20">
                  <div>
                    <h3 className="font-medium">Tax ID Numbers</h3>
                    <p className="text-sm text-muted-foreground">Manage your business tax identification numbers</p>
                  </div>
                  <Button variant="outline">Manage</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border-b border-border/20">
                  <div>
                    <h3 className="font-medium">Default Tax Rates</h3>
                    <p className="text-sm text-muted-foreground">Set default tax rates for new products and services</p>
                  </div>
                  <Button variant="outline">Set Defaults</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default TaxesPage;
