
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, Plus, FileText, ArrowUpDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const InvoicesPage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Mock invoice data
  const invoices = [
    { id: 'INV-2023-001', customer: 'Acme Corp', date: '2023-06-15', amount: 1250.00, status: 'paid' },
    { id: 'INV-2023-002', customer: 'Globex Industries', date: '2023-07-01', amount: 875.50, status: 'pending' },
    { id: 'INV-2023-003', customer: 'Stark Enterprises', date: '2023-06-20', amount: 3200.00, status: 'paid' },
    { id: 'INV-2023-004', customer: 'Wayne Industries', date: '2023-07-05', amount: 1540.75, status: 'overdue' },
    { id: 'INV-2023-005', customer: 'LexCorp', date: '2023-06-29', amount: 1050.00, status: 'pending' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'paid':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Paid</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>;
      case 'overdue':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Overdue</span>;
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
          Invoices
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage and track your customer invoices
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
            placeholder="Search invoices..."
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Export</span>
          </Button>
          <Button size="sm" className="gap-1" onClick={() => navigate('/invoices/add')}>
            <Plus className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>New Invoice</span>
          </Button>
        </div>
      </motion.div>

      <Card isGlass className="p-6">
        <div className="overflow-x-auto -mx-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 pl-6 font-medium">Invoice</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 pr-6 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="py-3 pl-6 font-medium">{invoice.id}</td>
                  <td className="py-3">{invoice.customer}</td>
                  <td className="py-3">{invoice.date}</td>
                  <td className="py-3 text-right">${invoice.amount.toFixed(2)}</td>
                  <td className="py-3">{getStatusBadge(invoice.status)}</td>
                  <td className="py-3 pr-6 text-right">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-1"
                      onClick={() => navigate(`/invoices/${invoice.id.toLowerCase()}`)}
                    >
                      <span className={isMobile ? "sr-only" : ""}>View</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-muted-foreground">Showing 5 of 25 invoices</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;
