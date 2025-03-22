
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from '@/components/ui/switch';
import { useApp } from '@/context/AppContext';

const SettingsPage: React.FC = () => {
  const { notification } = useApp();
  
  const handleSave = () => {
    notification('Settings saved successfully', 'success');
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
          Settings
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Configure your account and application preferences
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Tabs defaultValue="account">
          <TabsList className="mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-4">
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="(555) 123-4567" />
                </div>
              </div>
            </Card>
            
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Security</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="2fa" />
                  <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                </div>
              </div>
            </Card>
            
            <div className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="company" className="space-y-4">
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" defaultValue="Acme Corporation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input id="businessType" defaultValue="Corporation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID / EIN</Label>
                  <Input id="taxId" defaultValue="12-3456789" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="companyAddress">Address</Label>
                  <Input id="companyAddress" defaultValue="123 Business St" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyCity">City</Label>
                  <Input id="companyCity" defaultValue="San Francisco" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyState">State</Label>
                  <Input id="companyState" defaultValue="CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyZip">ZIP Code</Label>
                  <Input id="companyZip" defaultValue="94103" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyCountry">Country</Label>
                  <Input id="companyCountry" defaultValue="United States" />
                </div>
              </div>
            </Card>
            
            <div className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="billing" className="space-y-4">
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Subscription</h3>
              <div className="space-y-2">
                <div className="p-4 bg-primary/10 rounded-md">
                  <p className="font-medium">Current Plan: Professional</p>
                  <p className="text-muted-foreground text-sm">Your subscription renews on October 15, 2023</p>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline">Upgrade Plan</Button>
                </div>
              </div>
            </Card>
            
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-md flex justify-between items-center">
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-muted-foreground text-sm">Expires 12/25</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <Button variant="outline" size="sm">Add Payment Method</Button>
              </div>
            </Card>
            
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Billing History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Description</th>
                      <th className="pb-3 font-medium text-right">Amount</th>
                      <th className="pb-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="py-3">Sep 15, 2023</td>
                      <td className="py-3">Professional Plan - Monthly</td>
                      <td className="py-3 text-right">$49.99</td>
                      <td className="py-3 text-right">
                        <Button variant="ghost" size="sm">View Receipt</Button>
                      </td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3">Aug 15, 2023</td>
                      <td className="py-3">Professional Plan - Monthly</td>
                      <td className="py-3 text-right">$49.99</td>
                      <td className="py-3 text-right">
                        <Button variant="ghost" size="sm">View Receipt</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Invoice Reminders</p>
                    <p className="text-muted-foreground text-sm">Get notified when invoices are due</p>
                  </div>
                  <Switch id="invoiceReminders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment Notifications</p>
                    <p className="text-muted-foreground text-sm">Get notified when you receive payments</p>
                  </div>
                  <Switch id="paymentNotifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Low Inventory Alerts</p>
                    <p className="text-muted-foreground text-sm">Get notified when inventory items are low</p>
                  </div>
                  <Switch id="inventoryAlerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Account Updates</p>
                    <p className="text-muted-foreground text-sm">Get notified about important account changes</p>
                  </div>
                  <Switch id="accountUpdates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Communications</p>
                    <p className="text-muted-foreground text-sm">Receive news and promotional offers</p>
                  </div>
                  <Switch id="marketingComms" />
                </div>
              </div>
            </Card>
            
            <div className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <Card isGlass className="p-6">
              <h3 className="text-lg font-medium mb-4">Theme</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-primary rounded-md p-4 flex flex-col items-center">
                  <div className="w-full h-20 bg-background rounded-md mb-4 flex items-center justify-center border border-border">
                    Light
                  </div>
                  <Button variant="outline" size="sm">Select</Button>
                </div>
                <div className="border border-border rounded-md p-4 flex flex-col items-center">
                  <div className="w-full h-20 bg-black text-white rounded-md mb-4 flex items-center justify-center">
                    Dark
                  </div>
                  <Button variant="outline" size="sm">Select</Button>
                </div>
                <div className="border border-border rounded-md p-4 flex flex-col items-center">
                  <div className="w-full h-20 bg-gradient-to-r from-background to-black rounded-md mb-4 flex items-center justify-center">
                    System
                  </div>
                  <Button variant="outline" size="sm">Select</Button>
                </div>
              </div>
            </Card>
            
            <div className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
