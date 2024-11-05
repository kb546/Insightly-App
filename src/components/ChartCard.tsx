import React from 'react';
import { BarChart2, Download, MoreVertical } from 'lucide-react';

interface ChartCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {description && (
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-50">
              <Download className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-50">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default ChartCard;