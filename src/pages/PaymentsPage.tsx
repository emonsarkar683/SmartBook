
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, ChevronDown, Eye } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const PaymentsPage: React.FC = () => {
  const isMobile = useIsMobile();

  // Mock payment data
  const payments = [
    { id: 'PAY-001', invoice: 'INV-2023-001', customer: 'Acme Corp', date: '2023-06-15', amount: 1250.00, method: 'Credit Card' },
    { id: 'PAY-002', invoice: 'INV-2023-003', customer: 'Stark Enterprises', date: '2023-06-20', amount: 3200.00, method: 'Bank Transfer' },
    { id: 'PAY-003', invoice: 'INV-2023-005', customer: 'LexCorp', date: '2023-06-29', amount: 1050.00, method: 'PayPal' },
    { id: 'PAY-004', invoice: 'INV-2023-002', customer: 'Globex Industries', date: '2023-07-01', amount: 875.50, method: 'Credit Card' },
    { id: 'PAY-005', invoice: 'INV-2023-004', customer: 'Wayne Industries', date: '2023-07-05', amount: 1540.75, method: 'Check' },
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
          Payments
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Track and manage all incoming payments
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
            placeholder="Search payments..."
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Export</span>
          </Button>
          <Button size="sm" className="gap-1">
            <span className={isMobile ? "sr-only" : ""}>Record Payment</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <Card isGlass className="p-6">
        <div className="overflow-x-auto -mx-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 pl-6 font-medium">Payment ID</th>
                <th className="pb-3 font-medium">Invoice</th>
                <th className="pb-3 font-medium hidden md:table-cell">Customer</th>
                <th className="pb-3 font-medium hidden sm:table-cell">Date</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium hidden lg:table-cell">Method</th>
                <th className="pb-3 pr-6 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="py-3 pl-6">{payment.id}</td>
                  <td className="py-3">{payment.invoice}</td>
                  <td className="py-3 hidden md:table-cell">{payment.customer}</td>
                  <td className="py-3 hidden sm:table-cell">{payment.date}</td>
                  <td className="py-3 text-right">${payment.amount.toFixed(2)}</td>
                  <td className="py-3 hidden lg:table-cell">{payment.method}</td>
                  <td className="py-3 pr-6 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">View Details</span>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-muted-foreground">Showing 5 of 18 payments</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
