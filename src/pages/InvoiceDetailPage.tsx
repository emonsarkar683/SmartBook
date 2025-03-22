
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Send, Printer, MoreHorizontal } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const InvoiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock invoice data - in a real app, you would fetch this based on the id
  const invoice = {
    id: id || 'INV-2023-001',
    customer: {
      name: 'Acme Corporation',
      address: '123 Business Ave, Suite 100',
      city: 'San Francisco, CA 94107',
      email: 'billing@acmecorp.com',
      phone: '(555) 123-4567'
    },
    date: '2023-06-15',
    dueDate: '2023-07-15',
    items: [
      { id: 1, description: 'Website Design Services', quantity: 1, price: 750.00 },
      { id: 2, description: 'Logo Design', quantity: 1, price: 350.00 },
      { id: 3, description: 'Hosting Setup (Annual)', quantity: 1, price: 150.00 },
    ],
    status: 'paid',
    subtotal: 1250.00,
    tax: 93.75, // 7.5% tax
    total: 1343.75,
    notes: 'Thank you for your business!',
    paymentTerms: 'Net 30'
  };

  // Calculate totals
  const subtotal = invoice.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div className="space-y-6">
      <motion.div 
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/invoices">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Invoices
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Send className="h-4 w-4" />
            Send
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card isGlass className="p-8">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">Invoice #{invoice.id}</h1>
              <div className="space-y-1 text-muted-foreground">
                <p>Date: {invoice.date}</p>
                <p>Due Date: {invoice.dueDate}</p>
                <div className="mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    invoice.status === 'paid' 
                      ? 'bg-green-100 text-green-700' 
                      : invoice.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <h2 className="font-semibold text-lg">Your Company Name</h2>
              <div className="text-muted-foreground">
                <p>123 Business Street</p>
                <p>City, State 12345</p>
                <p>contact@yourcompany.com</p>
                <p>(555) 987-6543</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div>
              <h3 className="font-semibold mb-2">Bill To:</h3>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">{invoice.customer.name}</p>
                <p>{invoice.customer.address}</p>
                <p>{invoice.customer.city}</p>
                <p>{invoice.customer.email}</p>
                <p>{invoice.customer.phone}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="font-semibold mb-2">Payment Details:</h3>
              <div className="text-muted-foreground">
                <p>Payment Terms: {invoice.paymentTerms}</p>
                <p>Account Name: Your Company Name</p>
                <p>Account Number: XXXX-XXXX-XXXX-1234</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 font-medium">Description</th>
                  <th className="pb-3 font-medium text-right">Quantity</th>
                  <th className="pb-3 font-medium text-right">Unit Price</th>
                  <th className="pb-3 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={item.id} className="border-b border-border/40">
                    <td className="py-3">{item.description}</td>
                    <td className="py-3 text-right">{item.quantity}</td>
                    <td className="py-3 text-right">${item.price.toFixed(2)}</td>
                    <td className="py-3 text-right">${(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-end mb-8">
            <div className="w-full md:w-60 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (7.5%):</span>
                <span>${invoice.tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${invoice.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {invoice.notes && (
            <div className="border-t border-border pt-4">
              <h3 className="font-semibold mb-2">Notes:</h3>
              <p className="text-muted-foreground">{invoice.notes}</p>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
};

export default InvoiceDetailPage;
