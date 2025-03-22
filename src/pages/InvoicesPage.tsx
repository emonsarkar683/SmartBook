
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvoicesPage: React.FC = () => {
  // Mock invoice data
  const invoices = [
    { id: 'INV-2023-001', customer: 'Acme Corp', date: '2023-06-15', amount: 1250.00, status: 'paid' },
    { id: 'INV-2023-002', customer: 'Globex Industries', date: '2023-06-18', amount: 875.50, status: 'pending' },
    { id: 'INV-2023-003', customer: 'Stark Enterprises', date: '2023-06-20', amount: 3200.00, status: 'paid' },
    { id: 'INV-2023-004', customer: 'Wayne Industries', date: '2023-06-25', amount: 1540.75, status: 'overdue' },
    { id: 'INV-2023-005', customer: 'LexCorp', date: '2023-06-28', amount: 2100.00, status: 'pending' },
  ];

  // Function to determine status color
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'overdue': return 'bg-red-100 text-red-700';
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
          Invoices
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage and track all your invoices
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
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Link to="/invoices/add">
            <Button size="sm" className="gap-1">
              <PlusCircle className="h-4 w-4" />
              New Invoice
            </Button>
          </Link>
        </div>
      </motion.div>

      <Card isGlass className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 font-medium">Invoice ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={invoice.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="py-3">{invoice.id}</td>
                  <td className="py-3">{invoice.customer}</td>
                  <td className="py-3">{invoice.date}</td>
                  <td className="py-3 text-right">${invoice.amount.toFixed(2)}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <Link to={`/invoices/${invoice.id}`}>
                      <Button variant="ghost" size="sm">View</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default InvoicesPage;
