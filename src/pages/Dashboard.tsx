import React from 'react';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import KPICard from '../components/KPICard';
import ChartCard from '../components/ChartCard';

function Dashboard() {
  const kpis = [
    {
      title: 'Total Revenue',
      value: '$54,239',
      change: 12.5,
      icon: <DollarSign className="h-6 w-6" />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Active Customers',
      value: '2,345',
      change: 8.2,
      icon: <Users className="h-6 w-6" />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Total Orders',
      value: '1,789',
      change: -3.1,
      icon: <ShoppingCart className="h-6 w-6" />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Growth Rate',
      value: '15.3%',
      change: 4.1,
      icon: <TrendingUp className="h-6 w-6" />,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Your business performance at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChartCard
          title="Revenue Overview"
          description="Monthly revenue performance"
        >
          <div className="h-80 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </ChartCard>

        <ChartCard
          title="Customer Growth"
          description="New vs returning customers"
        >
          <div className="h-80 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </ChartCard>

        <ChartCard
          title="Top Products"
          description="Best performing products by revenue"
        >
          <div className="h-80 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </ChartCard>

        <ChartCard
          title="Sales Channels"
          description="Revenue distribution by channel"
        >
          <div className="h-80 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </ChartCard>
      </div>
    </div>
  );
}

export default Dashboard;