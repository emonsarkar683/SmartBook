
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Search, Plus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const VendorsPage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Mock vendor data
  const vendors = [
    { 
      id: 'VEN-001', 
      name: 'Office Supplies Co.', 
      contact: 'John Smith', 
      email: 'john@officesupplies.co', 
      phone: '(555) 123-4567',
      balance: 2500.00,
      status: 'active'
    },
    { 
      id: 'VEN-002', 
      name: 'Global Shipping LLC', 
      contact: 'Diana Prince', 
      email: 'diana@globalshipping.com', 
      phone: '(555) 234-5678',
      balance: 4300.50,
      status: 'active'
    },
    { 
      id: 'VEN-003', 
      name: 'Tech Hardware Inc', 
      contact: 'Bruce Wayne', 
      email: 'bruce@techhardware.com', 
      phone: '(555) 345-6789',
      balance: 0,
      status: 'inactive'
    },
    { 
      id: 'VEN-004', 
      name: 'Digital Marketing Agency', 
      contact: 'Clark Kent', 
      email: 'clark@digitalmarketing.co', 
      phone: '(555) 456-7890',
      balance: 7500.25,
      status: 'active'
    },
    { 
      id: 'VEN-005', 
      name: 'Logistics Solutions', 
      contact: 'Tony Stark', 
      email: 'tony@logisticssolutions.com', 
      phone: '(555) 567-8901',
      balance: 1200.75,
      status: 'active'
    },
  ];
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>;
      case 'inactive':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Inactive</span>;
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
          Vendors
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage your suppliers and service providers
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
            placeholder="Search vendors..."
          />
        </div>
        
        <Button size="sm" className="gap-1" onClick={() => navigate('/vendors/add')}>
          <Plus className="h-4 w-4" />
          <span className={isMobile ? "sr-only" : ""}>Add Vendor</span>
        </Button>
      </motion.div>

      <Card isGlass className="p-6">
        <div className="overflow-x-auto -mx-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 pl-6 font-medium">Vendor</th>
                <th className="pb-3 font-medium">Contact</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium hidden md:table-cell">Phone</th>
                <th className="pb-3 font-medium text-right">Balance</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 pr-6 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="py-3 pl-6">
                    <div className="font-medium">{vendor.name}</div>
                    <div className="text-xs text-muted-foreground">{vendor.id}</div>
                  </td>
                  <td className="py-3">{vendor.contact}</td>
                  <td className="py-3 truncate max-w-[150px]">{vendor.email}</td>
                  <td className="py-3 hidden md:table-cell">{vendor.phone}</td>
                  <td className="py-3 text-right">
                    ${vendor.balance.toFixed(2)}
                  </td>
                  <td className="py-3">{getStatusBadge(vendor.status)}</td>
                  <td className="py-3 pr-6 text-right">
                    <Button variant="ghost" size="sm" className="gap-1">
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
        <p className="text-sm text-muted-foreground">Showing 5 of 12 vendors</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;
