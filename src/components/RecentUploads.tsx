import React from 'react';
import { FileText, Calendar, ArrowRight } from 'lucide-react';

interface Upload {
  id: string;
  name: string;
  date: string;
  insights: number;
}

function RecentUploads() {
  const uploads: Upload[] = [
    { id: '1', name: 'Q1 Sales Data.csv', date: '2024-03-10', insights: 12 },
    { id: '2', name: 'Customer Feedback.xlsx', date: '2024-03-08', insights: 8 },
    { id: '3', name: 'Inventory Report.csv', date: '2024-03-05', insights: 15 },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Recent Uploads</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <FileText className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{upload.name}</h4>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {upload.date}
                </p>
              </div>
            </div>
            <button className="text-indigo-600 hover:text-indigo-700 p-2 rounded-lg hover:bg-indigo-50 transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentUploads;