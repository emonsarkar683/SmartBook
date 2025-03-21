import React from 'react';
import { Search, UserPlus, UserCheck, Users, ChevronRight } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CustomersPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock customer data - would be replaced with actual API data
  const customers = [
    { id: '1', name: 'Sarah Johnson', amount: '$4,500.00', unPaid: true },
    { id: '2', name: 'Tech Solutions Inc.', amount: '$12,200.00', unPaid: false },
    { id: '3', name: 'Robert Wilson', amount: '$890.00', unPaid: true },
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
          Customers & Vendors
        </motion.h1>
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search customers and vendors..." 
            className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-sm"
          />
        </motion.div>
      </header>

      <motion.div 
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card 
          isGlass 
          isHoverable 
          className="flex flex-col items-center p-6 cursor-pointer"
          onClick={() => navigate('/customers/add')}
        >
          <div className="bg-primary-light h-12 w-12 rounded-full flex items-center justify-center mb-3">
            <UserPlus className="h-6 w-6 text-primary" />
          </div>
          <span className="text-center font-medium">Add New Customer</span>
        </Card>
        
        <Card 
          isGlass 
          isHoverable 
          className="flex flex-col items-center p-6 cursor-pointer"
          onClick={() => navigate('/vendors/add')}
        >
          <div className="bg-secondary-light h-12 w-12 rounded-full flex items-center justify-center mb-3">
            <UserCheck className="h-6 w-6 text-secondary" />
          </div>
          <span className="text-center font-medium">Add New Vendor</span>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex items-center mb-4">
          <Users className="mr-2 h-5 w-5" />
          <h2 className="text-lg font-medium">Customers</h2>
        </div>
        
        <Card isGlass className="mb-6">
          <div className="space-y-2">
            {customers.map((customer) => (
              <div 
                key={customer.id} 
                className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                onClick={() => navigate(`/customers/${customer.id}`)}
              >
                <div>
                  <div className="font-medium">{customer.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {customer.unPaid ? 'Unpaid' : 'Paid'}: {customer.amount}
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-muted-foreground/10 transition-colors">
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="flex items-center mb-4">
          <UserCheck className="mr-2 h-5 w-5" />
          <h2 className="text-lg font-medium">Vendors</h2>
        </div>
        
        <Card isGlass>
          <div className="space-y-2">
            {[
              { name: 'Office Supplies Co.', amount: '$1,250.00', dueSoon: true },
              { name: 'Global Shipping LLC', amount: '$3,400.00', dueSoon: false },
              { name: 'Digital Marketing Agency', amount: '$5,600.00', dueSoon: true },
            ].map((vendor, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <div>
                  <div className="font-medium">{vendor.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {vendor.dueSoon ? 'Due soon' : 'Paid'}: {vendor.amount}
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-muted-foreground/10 transition-colors">
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default CustomersPage;
