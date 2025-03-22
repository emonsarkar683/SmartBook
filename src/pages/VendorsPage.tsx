
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { UserPlus, Search, Building, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VendorsPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock vendor data
  const vendors = [
    { id: '1', name: 'Office Supplies Co.', contact: 'Jessica Brown', email: 'jessica@officesupplies.co', phone: '(555) 234-5678' },
    { id: '2', name: 'Global Shipping LLC', contact: 'Michael Chen', email: 'michael@globalshipping.com', phone: '(555) 345-6789' },
    { id: '3', name: 'Digital Marketing Agency', contact: 'Emma Wilson', email: 'emma@digitalmarketing.io', phone: '(555) 456-7890' },
    { id: '4', name: 'Tech Hardware Inc.', contact: 'David Rodriguez', email: 'david@techhardware.com', phone: '(555) 567-8901' },
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
          <Building className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Vendors</h1>
        </motion.div>
        <motion.p 
          className="text-muted-foreground mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage your suppliers and service providers
        </motion.p>
      </header>

      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search vendors..." 
            className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-sm"
          />
        </div>
        <Button 
          className="gap-2" 
          onClick={() => navigate('/vendors/add')}
        >
          <UserPlus className="h-4 w-4" />
          Add Vendor
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card isGlass>
          <div className="divide-y divide-border/20">
            {vendors.map((vendor) => (
              <div 
                key={vendor.id} 
                className="p-4 hover:bg-muted/20 transition-colors cursor-pointer"
                onClick={() => {/* Navigate to vendor detail when implemented */}}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{vendor.name}</h3>
                    <p className="text-muted-foreground">{vendor.contact}</p>
                    <div className="mt-1 text-sm flex flex-wrap gap-x-4">
                      <span>{vendor.email}</span>
                      <span>{vendor.phone}</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full hover:bg-muted-foreground/10 transition-colors mt-1">
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card isGlass className="p-6">
          <h2 className="font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-3">
            {[
              { vendor: 'Office Supplies Co.', date: '2023-05-10', amount: '$1,250.00' },
              { vendor: 'Global Shipping LLC', date: '2023-04-28', amount: '$3,400.00' },
              { vendor: 'Tech Hardware Inc.', date: '2023-04-15', amount: '$5,600.00' },
            ].map((order, index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <div>
                  <div className="font-medium">{order.vendor}</div>
                  <div className="text-xs text-muted-foreground">{order.date}</div>
                </div>
                <div className="font-medium">{order.amount}</div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card isGlass className="p-6">
          <h2 className="font-semibold mb-4">Pending Payments</h2>
          <div className="space-y-3">
            {[
              { vendor: 'Digital Marketing Agency', due: '2023-06-15', amount: '$2,750.00', status: 'Due Soon' },
              { vendor: 'Office Supplies Co.', due: '2023-06-30', amount: '$850.00', status: 'Upcoming' },
            ].map((payment, index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <div>
                  <div className="font-medium">{payment.vendor}</div>
                  <div className="text-xs text-muted-foreground">Due: {payment.due}</div>
                </div>
                <div>
                  <div className="font-medium text-right">{payment.amount}</div>
                  <div className="text-xs text-right">
                    <span className={`px-1.5 py-0.5 rounded-full ${
                      payment.status === 'Due Soon' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {payment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default VendorsPage;
