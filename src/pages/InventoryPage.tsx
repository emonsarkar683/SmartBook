
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search, Filter, AlertCircle } from 'lucide-react';

const InventoryPage: React.FC = () => {
  // Mock inventory data
  const inventoryItems = [
    { id: 'ITEM-001', name: 'Widget Pro', category: 'Hardware', quantity: 125, price: 49.99, status: 'in-stock' },
    { id: 'ITEM-002', name: 'Super Gadget', category: 'Electronics', quantity: 8, price: 199.99, status: 'low-stock' },
    { id: 'ITEM-003', name: 'Premium Doohickey', category: 'Hardware', quantity: 42, price: 79.99, status: 'in-stock' },
    { id: 'ITEM-004', name: 'Deluxe Thingamajig', category: 'Tools', quantity: 0, price: 129.99, status: 'out-of-stock' },
    { id: 'ITEM-005', name: 'Ultimate Whatchamacallit', category: 'Electronics', quantity: 15, price: 299.99, status: 'in-stock' },
  ];

  // Function to determine status display
  const getStatusDisplay = (status: string, quantity: number) => {
    switch(status) {
      case 'in-stock': return <span className="text-green-600">In Stock ({quantity})</span>;
      case 'low-stock': return <span className="text-yellow-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" /> Low Stock ({quantity})</span>;
      case 'out-of-stock': return <span className="text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" /> Out of Stock</span>;
      default: return <span>{status}</span>;
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
          Inventory
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Track and manage your product inventory
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
            placeholder="Search inventory..."
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            Add Item
          </Button>
        </div>
      </motion.div>

      <Card isGlass className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 font-medium">Item ID</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium text-right">Price</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                  <td className="py-3">{item.id}</td>
                  <td className="py-3">{item.name}</td>
                  <td className="py-3">{item.category}</td>
                  <td className="py-3 text-right">${item.price.toFixed(2)}</td>
                  <td className="py-3">
                    {getStatusDisplay(item.status, item.quantity)}
                  </td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
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

export default InventoryPage;
