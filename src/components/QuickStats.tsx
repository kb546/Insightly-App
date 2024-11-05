import React from 'react';
import { TrendingUp, Users, BarChart2, Activity } from 'lucide-react';

function QuickStats() {
  const stats = [
    {
      id: 1,
      name: 'Total Insights',
      value: '2,847',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      id: 2,
      name: 'Active Reports',
      value: '24',
      change: '+4.1%',
      icon: BarChart2,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      id: 3,
      name: 'Data Sources',
      value: '12',
      change: '+2.3%',
      icon: Activity,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      id: 4,
      name: 'Team Members',
      value: '8',
      change: '0%',
      icon: Users,
      color: 'text-amber-600',
      bg: 'bg-amber-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className={`p-2 ${stat.bg} rounded-lg`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <span className={`text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-gray-900">
            {stat.value}
          </h3>
          <p className="text-sm text-gray-500">{stat.name}</p>
        </div>
      ))}
    </div>
  );
}

export default QuickStats;