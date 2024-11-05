import React from 'react';
import { Upload, LineChart, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

function WelcomeHero() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg text-white p-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Insightly
        </h1>
        <p className="text-indigo-100 mb-8">
          Transform your business data into actionable insights. Upload your data and let our AI-powered analytics guide your decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Upload className="h-6 w-6 mb-2" />
            <h3 className="font-medium mb-1">Easy Upload</h3>
            <p className="text-sm text-indigo-100">
              Drag and drop your files to get started
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <LineChart className="h-6 w-6 mb-2" />
            <h3 className="font-medium mb-1">Smart Analysis</h3>
            <p className="text-sm text-indigo-100">
              Automated insights and visualizations
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Lightbulb className="h-6 w-6 mb-2" />
            <h3 className="font-medium mb-1">AI Insights</h3>
            <p className="text-sm text-indigo-100">
              Get recommendations and predictions
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <Upload className="h-5 w-5" />
            Upload Your Data
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHero;