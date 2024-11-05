import React from 'react';
import WelcomeHero from '../components/WelcomeHero';
import QuickStats from '../components/QuickStats';
import RecentUploads from '../components/RecentUploads';

function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <WelcomeHero />
      <QuickStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentUploads />
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Tips</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-medium">•</span>
              Upload CSV, Excel, or JSON files to get started with your analysis
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">•</span>
              Our AI will automatically detect patterns and suggest relevant visualizations
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">•</span>
              Create custom dashboards by combining different insights and charts
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">•</span>
              Share reports with your team members for collaborative analysis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;