
import React from 'react';
import { ChevronRight, TrendingUp, CreditCard, Wallet, DollarSign, Clock, BarChart2 } from 'lucide-react';
import StatCard from '@/components/ui-custom/StatCard';
import Card from '@/components/ui-custom/Card';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="space-y-6">
      <header>
        <motion.h1 
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Good morning
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Here's your financial overview
        </motion.p>
      </header>

      <motion.div 
        className="grid grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Income" 
            value="$24,530" 
            icon={TrendingUp}
            trend={{ value: 12.5, isPositive: true }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Expenses" 
            value="$12,450" 
            icon={CreditCard}
            trend={{ value: 3.2, isPositive: false }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Receivables" 
            value="$8,240" 
            icon={Wallet}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Payables" 
            value="$5,430" 
            icon={DollarSign}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card isGlass className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Recent Activity</h2>
            <span className="text-sm text-primary flex items-center">
              View all <ChevronRight size={16} />
            </span>
          </div>
          
          <div className="space-y-3">
            {[
              { title: 'Invoice #1034', amount: '$2,500.00', type: 'income', date: 'Today', status: 'Completed' },
              { title: 'Office Supplies', amount: '$350.00', type: 'expense', date: 'Yesterday', status: 'Completed' },
              { title: 'Invoice #1033', amount: '$1,200.00', type: 'income', date: '3 days ago', status: 'Pending' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.type === 'income' ? 'bg-emerald-100 text-emerald-500' : 'bg-rose-100 text-rose-500'}`}>
                    {item.type === 'income' ? <TrendingUp size={14} /> : <CreditCard size={14} />}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Clock size={10} className="mr-1" /> {item.date}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${item.type === 'income' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {item.type === 'income' ? '+' : '-'}{item.amount}
                  </div>
                  <div className="text-xs">
                    <span className={`px-1.5 py-0.5 rounded-full ${item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card isGlass>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Financial Overview</h2>
            <span className="text-sm text-primary flex items-center">
              More <ChevronRight size={16} />
            </span>
          </div>
          
          <div className="h-52 flex items-center justify-center">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <BarChart2 size={20} />
              <span>Chart visualization will appear here</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;
