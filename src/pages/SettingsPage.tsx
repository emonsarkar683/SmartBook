
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Settings, User, CreditCard, Bell, Lock, Globe, PaintBucket, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const SettingsPage: React.FC = () => {
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
          Manage your account preferences and application settings
        </motion.p>
      </header>

      <Card isGlass className="p-6">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto mb-6">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden md:inline">Billing</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden md:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden md:inline">System</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Profile Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <input 
                    id="name"
                    type="text" 
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background" 
                    defaultValue="Alex Johnson"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <input 
                    id="email"
                    type="email" 
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background" 
                    defaultValue="alex@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <input 
                    id="company"
                    type="text" 
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background" 
                    defaultValue="Acme Enterprises"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <input 
                    id="phone"
                    type="tel" 
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background" 
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button>Save Changes</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Security
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <input 
                    id="current-password"
                    type="password" 
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background" 
                  />
                </div>
                <div>
                  <Label htmlFor="new-password">New Password</Label>
                  <input 
                    id="new-password"
                    type="password" 
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background" 
                  />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <input 
                    id="confirm-password"
                    type="password" 
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background" 
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button>Update Password</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="billing" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment Methods
              </h3>
              <div className="p-4 rounded-md border border-input bg-muted/20 mb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-background p-2 rounded-md border border-input">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/2025</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>
              <Button variant="outline">Add Payment Method</Button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-primary" />
                Subscription Plan
              </h3>
              <div className="p-4 rounded-md border border-primary/20 bg-primary/5 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Pro Plan</div>
                    <div className="text-sm text-muted-foreground">$29.99/month, renews on May 15, 2023</div>
                  </div>
                  <Button variant="outline" size="sm">Change Plan</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Email Notifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Invoice Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive emails when new invoices are created</p>
                  </div>
                  <Switch defaultChecked id="invoice-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive emails when payments are made</p>
                  </div>
                  <Switch defaultChecked id="payment-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Updates</p>
                    <p className="text-sm text-muted-foreground">Receive emails about system updates and maintenance</p>
                  </div>
                  <Switch id="system-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-muted-foreground">Receive promotional emails and offers</p>
                  </div>
                  <Switch id="marketing-notifications" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="system" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Regional Settings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="language">Language</Label>
                  <select 
                    id="language"
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <select 
                    id="timezone"
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background"
                  >
                    <option value="utc-8">Pacific Time (UTC-8)</option>
                    <option value="utc-5">Eastern Time (UTC-5)</option>
                    <option value="utc+0">UTC</option>
                    <option value="utc+1">Central European Time (UTC+1)</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="date-format">Date Format</Label>
                  <select 
                    id="date-format"
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background"
                  >
                    <option value="mdy">MM/DD/YYYY</option>
                    <option value="dmy">DD/MM/YYYY</option>
                    <option value="ymd">YYYY-MM-DD</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <select 
                    id="currency"
                    className="mt-1 w-full p-2 rounded-md border border-input bg-background"
                  >
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="jpy">JPY (¥)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <PaintBucket className="h-5 w-5 text-primary" />
                Appearance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Use dark theme for the application</p>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Reduced Motion</p>
                    <p className="text-sm text-muted-foreground">Minimize animations throughout the interface</p>
                  </div>
                  <Switch id="reduced-motion" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Data Management
              </h3>
              <div className="space-y-4 mt-4">
                <Button variant="outline">Import Data</Button>
                <Button variant="outline" className="ml-2">Export Data</Button>
                <Button variant="destructive" className="ml-2">Clear All Data</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SettingsPage;
