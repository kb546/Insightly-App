import React from 'react';
import { Table, AlertTriangle, CheckCircle } from 'lucide-react';

interface DataPreviewProps {
  data: Array<Record<string, any>>;
  validationIssues?: Array<string>;
}

function DataPreview({ data, validationIssues = [] }: DataPreviewProps) {
  if (!data.length) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Table className="h-5 w-5 text-gray-400" />
            <h3 className="font-semibold text-gray-900">Data Preview</h3>
          </div>
          <div className="flex items-center gap-2">
            {validationIssues.length > 0 ? (
              <span className="flex items-center gap-1 text-amber-600 text-sm">
                <AlertTriangle className="h-4 w-4" />
                {validationIssues.length} issues found
              </span>
            ) : (
              <span className="flex items-center gap-1 text-green-600 text-sm">
                <CheckCircle className="h-4 w-4" />
                Data validated
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.slice(0, 5).map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {String(row[column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataPreview;