import React from 'react';
import { PlusCircle, BarChart2, LineChart, PieChart } from 'lucide-react';
import ChartCard from '../components/ChartCard';

function Visualizations() {
  const chartTypes = [
    { icon: BarChart2, name: 'Bar Chart', description: 'Compare values across categories' },
    { icon: LineChart, name: 'Line Chart', description: 'Show trends over time' },
    { icon: PieChart, name: 'Pie Chart', description: 'Display part-to-whole relationships' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Visualizations</h1>
          <p className="text-gray-600 mt-1">Create and manage your data visualizations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <PlusCircle className="h-5 w-5" />
          New Visualization
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {chartTypes.map((type) => (
          <button
            key={type.name}
            className="p-6 bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition-colors group"
          >
            <type.icon className="h-8 w-8 text-gray-400 group-hover:text-indigo-600 mb-4" />
            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">
              {type.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{type.description}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChartCard
          title="Monthly Revenue"
          description="Revenue trends over the past 12 months"
        >
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </ChartCard>

        <ChartCard
          title="Sales by Category"
          description="Distribution of sales across product categories"
        >
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </ChartCard>
      </div>
    </div>
  );
}

export default Visualizations;