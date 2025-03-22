
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  FileText, 
  Printer, 
  Download, 
  Send, 
  Clock, 
  DollarSign, 
  CreditCard, 
  CheckCircle2
} from 'lucide-react';

// Mock data - would be replaced with actual API calls
const INVOICE_DATA = {
  id: 'inv-1034',
  number: 'INV-1034',
  date: '2023-05-12',
  dueDate: '2023-06-11',
  customer: {
    id: '1',
    name: 'Tech Solutions Inc.',
    email: 'accounts@techsolutions.com',
    address: '123 Tech Boulevard',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    country: 'USA'
  },
  items: [
    { id: '1', description: 'Web Development Services', quantity: 1, unitPrice: '$3,500.00', total: '$3,500.00' },
    { id: '2', description: 'UI/UX Design', quantity: 1, unitPrice: '$2,200.00', total: '$2,200.00' },
    { id: '3', description: 'SEO Optimization', quantity: 1, unitPrice: '$800.00', total: '$800.00' }
  ],
  subtotal: '$6,500.00',
  tax: '$650.00',
  discount: '$0.00',
  total: '$7,150.00',
  status: 'Paid',
  paymentDate: '2023-05-15',
  paymentMethod: 'Credit Card'
};

const InvoiceDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const invoice = INVOICE_DATA; // In a real app, fetch invoice by id

  return (
    <div className="space-y-6">
      <header>
        <motion.div 
          className="flex items-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={() => navigate('/invoices')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              Invoice {invoice.number}
            </h1>
            <p className="text-muted-foreground">
              {invoice.date} • {invoice.status === 'Paid' ? 'Paid on ' + invoice.paymentDate : 'Due on ' + invoice.dueDate}
            </p>
          </div>
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        <Button variant="outline" className="gap-2">
          <Printer className="h-4 w-4" />
          Print
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" className="gap-2">
          <Send className="h-4 w-4" />
          Send Email
        </Button>
        <div className="ml-auto">
          <Button className="gap-2">
            <CreditCard className="h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Card isGlass className="md:col-span-3 p-6">
          <div className="mb-8 flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-1">INVOICE</h2>
              <div className="text-lg font-medium">{invoice.number}</div>
              <div className="flex gap-2 text-sm text-muted-foreground mt-1">
                <div className="flex items-center gap-1">
                  <Clock size={14} /> Issued: {invoice.date}
                </div>
                <div>•</div>
                <div className="flex items-center gap-1">
                  <DollarSign size={14} /> Due: {invoice.dueDate}
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:text-right">
              <div className="text-sm text-muted-foreground mb-1">Status</div>
              <div className={`inline-block px-3 py-1 rounded-full ${
                invoice.status === 'Paid' 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : invoice.status === 'Pending' 
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-rose-100 text-rose-700'
              }`}>
                {invoice.status}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-sm text-muted-foreground mb-1">From</div>
              <div className="font-medium">Your Company Name</div>
              <div>123 Business Street</div>
              <div>San Francisco, CA 94107</div>
              <div>United States</div>
              <div className="mt-1">info@yourcompany.com</div>
            </div>
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Bill To</div>
              <div className="font-medium">{invoice.customer.name}</div>
              <div>{invoice.customer.address}</div>
              <div>{invoice.customer.city}, {invoice.customer.state} {invoice.customer.zipCode}</div>
              <div>{invoice.customer.country}</div>
              <div className="mt-1">{invoice.customer.email}</div>
            </div>
          </div>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-4 font-medium">Description</th>
                  <th className="text-right py-3 px-4 font-medium">Quantity</th>
                  <th className="text-right py-3 px-4 font-medium">Unit Price</th>
                  <th className="text-right py-3 px-4 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={item.id} className="border-b border-border/20">
                    <td className="py-3 px-4">{item.description}</td>
                    <td className="py-3 px-4 text-right">{item.quantity}</td>
                    <td className="py-3 px-4 text-right">{item.unitPrice}</td>
                    <td className="py-3 px-4 text-right font-medium">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-end">
            <div className="w-full max-w-xs">
              <div className="flex justify-between py-2">
                <div className="text-muted-foreground">Subtotal</div>
                <div className="font-medium">{invoice.subtotal}</div>
              </div>
              <div className="flex justify-between py-2">
                <div className="text-muted-foreground">Tax (10%)</div>
                <div className="font-medium">{invoice.tax}</div>
              </div>
              <div className="flex justify-between py-2">
                <div className="text-muted-foreground">Discount</div>
                <div className="font-medium">{invoice.discount}</div>
              </div>
              <div className="flex justify-between py-2 border-t border-border/40 mt-2">
                <div className="font-medium">Total</div>
                <div className="font-bold text-lg">{invoice.total}</div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="space-y-4">
          <Card isGlass className="p-6">
            <h3 className="font-medium mb-4">Payment Information</h3>
            {invoice.status === 'Paid' ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Paid in Full</span>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Date Paid</div>
                  <div>{invoice.paymentDate}</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Payment Method</div>
                  <div>{invoice.paymentMethod}</div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-600">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Payment Due</span>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Due Date</div>
                  <div>{invoice.dueDate}</div>
                </div>
                <Button className="w-full mt-2">Pay Now</Button>
              </div>
            )}
          </Card>
          
          <Card isGlass className="p-6">
            <h3 className="font-medium mb-4">Notes</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for your business! Payment is due within 30 days.
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default InvoiceDetailPage;
