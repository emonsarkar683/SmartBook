
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { FilePlus, FileText, Search, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InvoicesPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock data - would be replaced with API data
  const invoices = [
    { id: 'INV-1034', customer: 'Sarah Johnson', date: '2023-05-12', amount: '$4,500.00', status: 'Paid' },
    { id: 'INV-1025', customer: 'Tech Solutions Inc.', date: '2023-04-28', amount: '$12,200.00', status: 'Paid' },
    { id: 'INV-1020', customer: 'Robert Wilson', date: '2023-04-15', amount: '$1,800.00', status: 'Pending' },
    { id: 'INV-1015', customer: 'Creative Designs LLC', date: '2023-03-30', amount: '$3,200.00', status: 'Overdue' },
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
          Invoices
        </motion.h1>
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search invoices..." 
              className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-sm"
            />
          </div>
          <Button 
            className="gap-2" 
            onClick={() => navigate('/invoices/add')}
          >
            <FilePlus className="h-4 w-4" />
            New Invoice
          </Button>
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="space-y-6"
      >
        <Card isGlass className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-4 font-medium">Invoice #</th>
                  <th className="text-left py-3 px-4 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Amount</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr 
                    key={invoice.id} 
                    className="border-b border-border/20 hover:bg-muted/20 transition-colors"
                    onClick={() => navigate(`/invoices/${invoice.id.toLowerCase()}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td className="py-3 px-4 font-medium">{invoice.id}</td>
                    <td className="py-3 px-4">{invoice.customer}</td>
                    <td className="py-3 px-4">{invoice.date}</td>
                    <td className="py-3 px-4">{invoice.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        invoice.status === 'Paid' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : invoice.status === 'Pending' 
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-rose-100 text-rose-700'
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="icon" onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/invoices/${invoice.id.toLowerCase()}`);
                      }}>
                        <FileText className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <div className="flex items-center justify-between">
          <Button variant="outline" className="text-sm gap-1">
            <Clock className="h-4 w-4" />
            Recent Activity
          </Button>
          <div className="text-sm text-muted-foreground">
            Showing {invoices.length} invoices
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InvoicesPage;
