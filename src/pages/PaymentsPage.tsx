
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  Search, 
  Filter, 
  Download, 
  DollarSign, 
  Clock, 
  CalendarClock, 
  ChevronRight 
} from 'lucide-react';

const PaymentsPage: React.FC = () => {
  // Mock payment data
  const payments = [
    { id: 'PMT-1001', customer: 'Tech Solutions Inc.', date: '2023-05-10', amount: '$12,200.00', method: 'Credit Card', status: 'Completed' },
    { id: 'PMT-1002', customer: 'Sarah Johnson', date: '2023-05-05', amount: '$4,500.00', method: 'Bank Transfer', status: 'Completed' },
    { id: 'PMT-1003', customer: 'Creative Designs LLC', date: '2023-04-28', amount: '$3,200.00', method: 'PayPal', status: 'Completed' },
    { id: 'PMT-1004', customer: 'Robert Wilson', date: '2023-04-22', amount: '$1,800.00', method: 'Credit Card', status: 'Refunded' },
  ];

  return (
    <div className="space-y-6">
      <header>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CreditCard className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Payments</h1>
        </motion.div>
        <motion.p 
          className="text-muted-foreground mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Track and manage all your payment transactions
        </motion.p>
      </header>

      <motion.div 
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search payments..." 
            className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-sm"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="gap-2 flex-1 sm:flex-none">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2 flex-1 sm:flex-none">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card isGlass className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 rounded-full p-2">
              <DollarSign className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Payments</div>
              <div className="text-2xl font-bold">$21,700.00</div>
            </div>
          </div>
        </Card>
        
        <Card isGlass className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 rounded-full p-2">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Pending</div>
              <div className="text-2xl font-bold">$0.00</div>
            </div>
          </div>
        </Card>
        
        <Card isGlass className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-rose-100 rounded-full p-2">
              <CalendarClock className="h-5 w-5 text-rose-600" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Overdue</div>
              <div className="text-2xl font-bold">$0.00</div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card isGlass className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-4 font-medium">Payment ID</th>
                  <th className="text-left py-3 px-4 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Method</th>
                  <th className="text-right py-3 px-4 font-medium">Amount</th>
                  <th className="text-center py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4 font-medium">{payment.id}</td>
                    <td className="py-3 px-4">{payment.customer}</td>
                    <td className="py-3 px-4">{payment.date}</td>
                    <td className="py-3 px-4">{payment.method}</td>
                    <td className="py-3 px-4 text-right">{payment.amount}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          payment.status === 'Completed' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : payment.status === 'Pending' 
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-rose-100 text-rose-700'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card isGlass className="p-6">
          <h2 className="font-semibold mb-4">Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Credit Card', count: 15, amount: '$10,500.00' },
              { name: 'Bank Transfer', count: 8, amount: '$32,200.00' },
              { name: 'PayPal', count: 6, amount: '$5,800.00' },
            ].map((method, index) => (
              <div key={index} className="p-4 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <h3 className="font-medium mb-2">{method.name}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{method.count} payments</span>
                  <span className="font-medium">{method.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default PaymentsPage;
