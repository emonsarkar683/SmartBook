
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Package2, Search, Plus, BarChart2, ArrowDownUp } from 'lucide-react';

const InventoryPage: React.FC = () => {
  // Mock inventory data
  const inventory = [
    { id: '1', name: 'Product A', sku: 'SKU001', quantity: 120, price: '$19.99', category: 'Electronics' },
    { id: '2', name: 'Product B', sku: 'SKU002', quantity: 75, price: '$24.99', category: 'Accessories' },
    { id: '3', name: 'Product C', sku: 'SKU003', quantity: 10, price: '$99.99', category: 'Electronics' },
    { id: '4', name: 'Product D', sku: 'SKU004', quantity: 45, price: '$12.99', category: 'Office Supplies' },
    { id: '5', name: 'Product E', sku: 'SKU005', quantity: 32, price: '$34.99', category: 'Accessories' },
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
          <Package2 className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Inventory</h1>
        </motion.div>
        <motion.p 
          className="text-muted-foreground mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage your product inventory and stock levels
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
            placeholder="Search products..." 
            className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-sm"
          />
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card isGlass className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-4 font-medium">Product Name</th>
                  <th className="text-left py-3 px-4 font-medium">SKU</th>
                  <th className="text-left py-3 px-4 font-medium">Category</th>
                  <th className="text-right py-3 px-4 font-medium">Quantity</th>
                  <th className="text-right py-3 px-4 font-medium">Price</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{item.sku}</td>
                    <td className="py-3 px-4">{item.category}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        item.quantity <= 10 
                          ? 'bg-rose-100 text-rose-700' 
                          : item.quantity <= 50 
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {item.quantity}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">{item.price}</td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="icon">
                        <ArrowDownUp className="h-4 w-4" />
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
        transition={{ duration: 0.3, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card isGlass className="p-6">
          <h2 className="font-semibold mb-4 flex items-center">
            <BarChart2 className="mr-2 h-5 w-5 text-primary" />
            Inventory Overview
          </h2>
          <div className="h-52 flex items-center justify-center bg-muted/30 rounded-lg">
            <span className="text-muted-foreground">Chart visualization will appear here</span>
          </div>
        </Card>
        
        <Card isGlass className="p-6">
          <h2 className="font-semibold mb-4">Low Stock Alerts</h2>
          <div className="space-y-2">
            {inventory
              .filter(item => item.quantity <= 30)
              .map(item => (
                <div key={item.id} className="flex justify-between items-center p-2 rounded-lg bg-muted/30">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.sku}</div>
                  </div>
                  <div className="text-rose-500 font-medium">
                    {item.quantity} left
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default InventoryPage;
