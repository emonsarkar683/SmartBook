
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  User, 
  Building, 
  CreditCard, 
  Bell, 
  ShieldCheck, 
  Users, 
  Save,
  Moon,
  Sun
} from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Settings className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Settings</h1>
        </motion.div>
        <motion.p 
          className="text-muted-foreground mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Manage your account and application preferences
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Tabs defaultValue="account">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 md:w-fit">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Account
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <Building className="h-4 w-4" /> Business
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Billing
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Security
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="mt-6 space-y-6">
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Account Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" 
                      defaultValue="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" 
                      defaultValue="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" 
                    defaultValue="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 bg-background rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" 
                    defaultValue="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </Card>
            
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Appearance</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-muted-foreground" />
                    <Switch id="dark-mode" />
                    <Moon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Compact View</h3>
                    <p className="text-sm text-muted-foreground">Decrease the spacing between elements</p>
                  </div>
                  <Switch id="compact-view" />
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="business" className="mt-6">
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Business Information</h2>
              <p className="text-muted-foreground text-center p-8">
                Business settings content will appear here
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing" className="mt-6">
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
              <p className="text-muted-foreground text-center p-8">
                Billing settings content will appear here
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
              <p className="text-muted-foreground text-center p-8">
                Notification settings content will appear here
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="mt-6">
            <Card isGlass className="p-6">
              <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
              <p className="text-muted-foreground text-center p-8">
                Security settings content will appear here
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
