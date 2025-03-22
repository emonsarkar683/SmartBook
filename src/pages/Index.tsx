
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CreditCard, LayoutDashboard, LineChart, Package2, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const features = [
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Easily manage all your customer information in one place.'
  },
  {
    icon: CreditCard,
    title: 'Invoice Processing',
    description: 'Create, send, and track invoices with just a few clicks.'
  },
  {
    icon: Package2,
    title: 'Inventory Tracking',
    description: 'Keep track of your inventory levels and get low stock alerts.'
  },
  {
    icon: LineChart,
    title: 'Financial Reports',
    description: 'Generate comprehensive financial reports and analytics.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data is always secure and available when you need it.'
  },
  {
    icon: LayoutDashboard,
    title: 'Intuitive Dashboard',
    description: 'Get a clear overview of your business performance at a glance.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b border-border/30 backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">InvoiceApp</div>
          <Link to="/">
            <Button>
              Dashboard
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Streamline Your Business Finances
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                The all-in-one solution for invoicing, inventory management, and financial tracking designed for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl border border-border/30 bg-card/50 backdrop-blur-md"
            >
              <AspectRatio ratio={16/9} className="bg-muted">
                <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                  Dashboard Preview
                </div>
              </AspectRatio>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage your business finances efficiently in one place.
              </p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={item} 
                  className="bg-card rounded-xl p-6 border border-border/30 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-border/30 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start using our invoicing and inventory management solution today and focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-border/30 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2023 InvoiceApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
