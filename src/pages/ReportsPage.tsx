import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui-custom/Card';
import { PieChart, LineChart, BarChart, ActivitySquare, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/ui-custom/StatCard';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend,
  BarChart as RechartsBarChart,
  Bar
} from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

const ReportsPage: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Mock data for charts
  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 3800 },
    { name: 'Sep', value: 4100 },
    { name: 'Oct', value: 4300 },
    { name: 'Nov', value: 4500 },
    { name: 'Dec', value: 4900 },
  ];

  const pieData = [
    { name: 'Product Sales', value: 65 },
    { name: 'Services', value: 25 },
    { name: 'Other', value: 10 },
  ];

  const barData = [
    { name: 'Acme Corp', value: 5500 },
    { name: 'Globex', value: 4200 },
    { name: 'Wayne Ind.', value: 3800 },
    { name: 'Stark Ent.', value: 3100 },
    { name: 'LexCorp', value: 2700 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const pieChartLabel = ({ name, percent }: { name: string; percent: number }) => {
    return `${name}: ${(percent * 100).toFixed(0)}%`;
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
          Reports
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          View and analyze your business performance
        </motion.p>
      </header>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div className="inline-flex items-center p-1 rounded-lg bg-muted/50 border border-border/40">
          <Button variant="ghost" size="sm" className="rounded-md">Daily</Button>
          <Button variant="ghost" size="sm" className="rounded-md">Weekly</Button>
          <Button variant="default" size="sm" className="rounded-md">Monthly</Button>
          <Button variant="ghost" size="sm" className="rounded-md">Yearly</Button>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Calendar className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Date Range</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span className={isMobile ? "sr-only" : ""}>Export</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Total Revenue" 
          value="$82,540.50" 
          trend={{ value: 12.5, isPositive: true }}
          icon={LineChart}
        />
        <StatCard 
          title="Invoices Sent" 
          value="254" 
          trend={{ value: 8.2, isPositive: true }}
          icon={ActivitySquare}
        />
        <StatCard 
          title="Average Sale" 
          value="$324.96" 
          trend={{ value: 2.4, isPositive: false }}
          icon={BarChart}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card isGlass className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <LineChart className="h-5 w-5 text-primary" />
            Revenue Trend
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorUv)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card isGlass className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            Revenue Breakdown
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={pieChartLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card isGlass className="p-6">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <BarChart className="h-5 w-5 text-primary" />
          Top Customers by Revenue
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              layout="vertical"
              data={barData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(var(--secondary))" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default ReportsPage;
