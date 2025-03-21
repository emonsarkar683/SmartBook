
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, ArrowLeft, Mail, Phone, MapPin, Building, FileText, PenLine } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

// Mock data - would be replaced with actual API calls
const CUSTOMER_DATA = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  phone: '(555) 123-4567',
  company: 'Johnson Designs',
  address: '123 Main Street',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94105',
  country: 'USA',
  invoices: [
    { id: 'INV-1034', date: '2023-05-12', amount: '$4,500.00', status: 'Paid' },
    { id: 'INV-1025', date: '2023-04-28', amount: '$3,200.00', status: 'Paid' },
    { id: 'INV-1020', date: '2023-04-15', amount: '$1,800.00', status: 'Paid' }
  ]
};

const CustomerDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const customer = CUSTOMER_DATA; // In a real app, fetch customer by id

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
            onClick={() => navigate('/customers')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" />
              {customer.name}
            </h1>
            <p className="text-muted-foreground">{customer.company}</p>
          </div>
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex gap-4 flex-wrap md:flex-nowrap"
      >
        <Card isGlass className="p-6 w-full md:w-1/3">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>{customer.email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p>{customer.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Company</p>
                <p>{customer.company}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p>{customer.address}</p>
                <p>{customer.city}, {customer.state} {customer.zipCode}</p>
                <p>{customer.country}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button variant="outline" className="gap-2">
              <PenLine className="h-4 w-4" /> Edit Customer
            </Button>
          </div>
        </Card>
        
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="invoices">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="invoices" className="mt-4">
              <Card isGlass className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Recent Invoices</h3>
                  <Button variant="outline" className="gap-2" size="sm">
                    <FileText className="h-4 w-4" /> New Invoice
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customer.invoices.map((invoice) => (
                      <TableRow 
                        key={invoice.id} 
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => navigate(`/invoices/${invoice.id.toLowerCase()}`)}
                      >
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            invoice.status === 'Paid' 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : invoice.status === 'Pending' 
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-rose-100 text-rose-700'
                          }`}>
                            {invoice.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity" className="mt-4">
              <Card isGlass className="p-6">
                <p className="text-muted-foreground text-center p-4">
                  Customer activity history will be displayed here.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerDetailPage;
