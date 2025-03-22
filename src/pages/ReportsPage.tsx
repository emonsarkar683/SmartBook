
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Download, 
  Calendar as CalendarIcon,
  Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ReportsPage: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Mock report types
  const reportTypes = [
    { id: 'sales', name: 'Sales Report', icon: BarChart3 },
    { id: 'expenses', name: 'Expense Report', icon: LineChart },
    { id: 'profit', name: 'Profit & Loss', icon: PieChart },
    { id: 'taxes', name: 'Tax Summary', icon: BarChart3 },
    { id: 'inventory', name: 'Inventory Report', icon: LineChart },
    { id: 'customer', name: 'Customer Report', icon: PieChart },
  ];

  return (
    <div className="space-y-6">
      <header>
        <motion.h1 
          className="text-2xl font-bold mb-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Reports
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Generate and analyze reports for your business
        </motion.p>
      </header>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="md:col-span-2 space-y-6">
          <Card isGlass className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Report Types</h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reportTypes.map((report) => (
                <div 
                  key={report.id}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <div className="bg-primary/10 rounded-full p-2">
                    <report.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{report.name}</div>
                    <div className="text-xs text-muted-foreground">View or download</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card isGlass className="p-6">
            <h2 className="font-semibold mb-4">Recent Reports</h2>
            <div className="space-y-3">
              {[
                { name: 'Q2 Sales Summary', date: '2023-06-30', type: 'Sales Report' },
                { name: 'Monthly Expense Report', date: '2023-05-31', type: 'Expense Report' },
                { name: 'Inventory Status', date: '2023-05-15', type: 'Inventory Report' },
              ].map((report, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div>
                    <div className="font-medium">{report.name}</div>
                    <div className="text-xs text-muted-foreground">{report.date} • {report.type}</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div>
          <Card isGlass className="p-6 sticky top-4">
            <h2 className="font-semibold mb-4">Select Date Range</h2>
            <div className="space-y-4">
              <div className="flex gap-2 items-center mb-4 text-sm">
                <CalendarIcon className="h-4 w-4 opacity-70" />
                <span>Select dates to generate report</span>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className={cn("rounded-md border")}
              />
              <Button className="w-full mt-4">Generate Report</Button>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ReportsPage;
