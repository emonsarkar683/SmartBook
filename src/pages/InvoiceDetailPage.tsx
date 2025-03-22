
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Send, Printer, FileText, Clock, CheckCircle, Pencil, Trash2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const InvoiceDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Mock invoice data - in a real app this would be fetched based on the ID
  const invoice = {
    id: id || 'inv-2023-001',
    number: 'INV-2023-001',
    date: '2023-06-15',
    dueDate: '2023-07-15',
    status: 'paid',
    customer: {
      name: 'Acme Corp',
      contactName: 'John Smith',
      email: 'john@acme.com',
      phone: '(555) 123-4567',
      address: '123 Main St, Suite 100, New York, NY 10001'
    },
    items: [
      { id: 1, description: 'Web Design Services', quantity: 1, unitPrice: 800.00, amount: 800.00 },
      { id: 2, description: 'Hosting (Annual)', quantity: 1, unitPrice: 240.00, amount: 240.00 },
      { id: 3, description: 'Content Creation', quantity: 5, unitPrice: 75.00, amount: 375.00 }
    ],
    subtotal: 1415.00,
    taxRate: 6.0,
    taxAmount: 84.90,
    total: 1499.90,
    notes: 'Thank you for your business! Payment is due within 30 days.',
    paymentMethod: 'Credit Card',
    paymentDate: '2023-06-20'
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'paid':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 flex items-center gap-1">
          <CheckCircle className="h-3 w-3" /> Paid
        </span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center gap-1">
          <Clock className="h-3 w-3" /> Pending
        </span>;
      case 'overdue':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 flex items-center gap-1">
          <Clock className="h-3 w-3" /> Overdue
        </span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mr-2"
            onClick={() => navigate('/invoices')}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {!isMobile && "Back"}
          </Button>
          <div>
            <motion.h1 
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Invoice {invoice.number}
            </motion.h1>
            <div className="flex items-center gap-2 mt-1">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Created on {invoice.date}</span>
              {getStatusBadge(invoice.status)}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Pencil className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Edit</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Printer className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Print</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Download</span>
          </Button>
          <Button size="sm" className="gap-1">
            <Send className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Send</span>
          </Button>
        </div>
      </header>

      <Card isGlass className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Bill To</h3>
            <p className="font-medium">{invoice.customer.name}</p>
            <p>{invoice.customer.contactName}</p>
            <p className="text-sm text-muted-foreground">{invoice.customer.email}</p>
            <p className="text-sm text-muted-foreground">{invoice.customer.phone}</p>
            <p className="text-sm text-muted-foreground mt-1">{invoice.customer.address}</p>
          </div>
          <div className="md:text-right">
            <div className="md:inline-flex md:flex-col">
              <div className="mb-2">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Invoice Number</h3>
                <p>{invoice.number}</p>
              </div>
              <div className="mb-2">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Invoice Date</h3>
                <p>{invoice.date}</p>
              </div>
              <div className="mb-2">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Due Date</h3>
                <p>{invoice.dueDate}</p>
              </div>
              {invoice.status === 'paid' && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Payment Date</h3>
                  <p>{invoice.paymentDate}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/60 text-left">
                <th className="pb-3 pl-6 font-medium">Description</th>
                <th className="pb-3 font-medium text-right">Quantity</th>
                <th className="pb-3 font-medium text-right">Unit Price</th>
                <th className="pb-3 pr-6 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item) => (
                <tr key={item.id} className="border-b border-border/20">
                  <td className="py-3 pl-6">{item.description}</td>
                  <td className="py-3 text-right">{item.quantity}</td>
                  <td className="py-3 text-right">${item.unitPrice.toFixed(2)}</td>
                  <td className="py-3 pr-6 text-right">${item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 md:w-72 ml-auto">
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${invoice.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border/20">
            <span className="text-muted-foreground">Tax ({invoice.taxRate}%)</span>
            <span>${invoice.taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 font-medium text-lg">
            <span>Total</span>
            <span>${invoice.total.toFixed(2)}</span>
          </div>
          {invoice.status === 'paid' && (
            <div className="mt-2 p-2 bg-green-50 rounded text-center text-green-700 text-sm">
              Paid via {invoice.paymentMethod} on {invoice.paymentDate}
            </div>
          )}
        </div>

        {invoice.notes && (
          <div className="mt-8 text-muted-foreground text-sm">
            <h3 className="font-medium text-foreground mb-1">Notes</h3>
            <p>{invoice.notes}</p>
          </div>
        )}
      </Card>

      <div className="flex justify-between">
        <Button 
          variant="outline" 
          className="gap-1 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
          Delete Invoice
        </Button>
        <Button onClick={() => navigate('/invoices')}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default InvoiceDetailPage;
