
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Save, X, Mail, Phone, MapPin, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApp } from '@/context/AppContext';

const AddNewVendorPage: React.FC = () => {
  const navigate = useNavigate();
  const { notification } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    notification('Vendor added successfully', 'success');
    navigate('/customers');
  };

  return (
    <div className="space-y-6">
      <header>
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <UserCheck className="h-6 w-6 mr-2 text-secondary" />
            <h1 className="text-2xl font-bold">Add New Vendor</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate('/customers')}>
            <X className="h-5 w-5" />
          </Button>
        </motion.div>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Enter vendor details to add them to your records
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card isGlass className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Vendor Name*</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Company*</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Company name"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="Street address"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1">City</label>
                  <Input 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">State</label>
                  <Input 
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Zip Code</label>
                  <Input 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip code"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Country</label>
                  <Input 
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Notes</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Additional notes about this vendor"
                  rows={3}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                />
              </div>
              
              <div className="flex justify-end pt-4 space-x-2">
                <Button variant="outline" type="button" onClick={() => navigate('/customers')}>
                  Cancel
                </Button>
                <Button type="submit" className="gap-2">
                  <Save className="h-4 w-4" /> Save Vendor
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default AddNewVendorPage;
