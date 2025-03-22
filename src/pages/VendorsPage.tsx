
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorsPage: React.FC = () => {
  // Mock vendors data
  const vendors = [
    { id: 'VEN-001', name: 'TechSupplies Inc.', contact: 'John Smith', email: 'john@techsupplies.com', phone: '(555) 123-4567', status: 'active' },
    { id: 'VEN-002', name: 'Global Materials Co.', contact: 'Sarah Johnson', email: 'sarah@globalmaterials.com', phone: '(555) 234-5678', status: 'active' },
    { id: 'VEN-003', name: 'Quality Parts Ltd.', contact: 'Michael Brown', email: 'michael@qualityparts.com', phone: '(555) 345-6789', status: 'inactive' },
    { id: 'VEN-004', name: 'Speedy Logistics', contact: 'Emma Wilson', email: 'emma@speedylogistics.com', phone: '(555) 456-7890', status: 'active' },
    { id: 'VEN-005', name: 'Office Solutions', contact: 'David Miller', email: 'david@officesolutions.com', phone: '(555) 567-8901', status: 'active' },
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
          Vendors
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage your suppliers and vendors
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
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Link to="/vendors/add">
            <Button size="sm" className="gap-1">
              <PlusCircle className="h-4 w-4" />
              Add Vendor
            </Button>
          </Link>
        </div>
      </motion.div>

      <Card isGlass className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 font-medium">Vendor ID</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Contact Person</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Phone</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="py-3">{vendor.id}</td>
                  <td className="py-3">{vendor.name}</td>
                  <td className="py-3">{vendor.contact}</td>
                  <td className="py-3">{vendor.email}</td>
                  <td className="py-3">{vendor.phone}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      vendor.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm">View</Button>
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

export default VendorsPage;
