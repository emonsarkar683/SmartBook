
import React from 'react';
import { Bell, Clock, AlertTriangle, CheckCircle, Calendar, ChevronRight } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { motion } from 'framer-motion';

const AlertsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <motion.h1 
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Alerts & Reminders
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Stay updated with important notifications
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium flex items-center">
            <Bell className="mr-2 h-5 w-5" />
            Recent Alerts
          </h2>
        </div>
        
        <Card isGlass className="space-y-3 mb-6">
          {[
            { 
              title: 'Invoice payment overdue', 
              description: 'Invoice #1032 for Robert Wilson is 5 days overdue.', 
              time: '2 hours ago',
              type: 'critical',
              action: 'Send reminder'
            },
            { 
              title: 'Low stock alert', 
              description: 'Black Ink Cartridge is below minimum stock level (5 units remaining).', 
              time: '1 day ago',
              type: 'warning',
              action: 'Order stock'
            },
            { 
              title: 'Payment received', 
              description: 'Payment of $4,500 received from Sarah Johnson for invoice #1034.', 
              time: '2 days ago',
              type: 'success',
              action: 'View details'
            },
          ].map((alert, index) => (
            <div key={index} className="p-4 rounded-lg hover:bg-muted/30 transition-colors flex items-start">
              <div className={`mt-0.5 mr-3 rounded-full p-1.5 ${
                alert.type === 'critical' 
                  ? 'bg-rose-100 text-rose-500'
                  : alert.type === 'warning'
                    ? 'bg-amber-100 text-amber-500'
                    : 'bg-emerald-100 text-emerald-500'
              }`}>
                {alert.type === 'critical' 
                  ? <AlertTriangle className="h-4 w-4" />
                  : alert.type === 'warning'
                    ? <AlertTriangle className="h-4 w-4" />
                    : <CheckCircle className="h-4 w-4" />
                }
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="font-medium">{alert.title}</div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <Clock size={10} className="mr-1" /> {alert.time}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{alert.description}</div>
                <div className="mt-2">
                  <button className="text-sm text-primary">{alert.action}</button>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Upcoming Reminders
          </h2>
          <button className="text-sm text-primary flex items-center">
            Add Reminder <ChevronRight size={16} />
          </button>
        </div>
        
        <Card isGlass className="space-y-3">
          {[
            { title: 'Tax filing deadline', date: 'May 15, 2023', daysLeft: 5 },
            { title: 'Vendor payment due', date: 'May 20, 2023', daysLeft: 10 },
            { title: 'Quarterly report preparation', date: 'June 5, 2023', daysLeft: 26 },
          ].map((reminder, index) => (
            <div key={index} className="p-4 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{reminder.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">Due: {reminder.date}</div>
                </div>
                <div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    reminder.daysLeft <= 7 
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {reminder.daysLeft} days left
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </motion.div>
    </div>
  );
};

export default AlertsPage;
