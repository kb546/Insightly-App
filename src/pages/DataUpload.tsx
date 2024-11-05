import React, { useState } from 'react';
import { ArrowRight, FileCheck, Settings } from 'lucide-react';
import FileUpload from '../components/FileUpload';
import DataPreview from '../components/DataPreview';

function DataUpload() {
  const [currentStep, setCurrentStep] = useState<'upload' | 'preview' | 'process'>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<Array<Record<string, any>>>([]);

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file);
    // Simulate file reading and data preview
    const sampleData = [
      { id: 1, date: '2024-03-01', revenue: 1500, category: 'Electronics' },
      { id: 2, date: '2024-03-02', revenue: 2300, category: 'Clothing' },
      { id: 3, date: '2024-03-03', revenue: 1800, category: 'Food' },
    ];
    setPreviewData(sampleData);
    setCurrentStep('preview');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Upload Data</h1>
        <p className="text-gray-600 mt-1">Import your business data for analysis</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className={`flex items-center gap-2 ${
          currentStep === 'upload' ? 'text-indigo-600' : 'text-gray-500'
        }`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 'upload' ? 'bg-indigo-100' : 'bg-gray-100'
          }`}>
            <FileCheck className="h-5 w-5" />
          </div>
          <span className="font-medium">Upload</span>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-300" />
        <div className={`flex items-center gap-2 ${
          currentStep === 'preview' ? 'text-indigo-600' : 'text-gray-500'
        }`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 'preview' ? 'bg-indigo-100' : 'bg-gray-100'
          }`}>
            <Settings className="h-5 w-5" />
          </div>
          <span className="font-medium">Preview & Configure</span>
        </div>
      </div>

      {currentStep === 'upload' && (
        <FileUpload onFileSelect={handleFileSelect} />
      )}

      {currentStep === 'preview' && selectedFile && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {selectedFile.name}
              </h2>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              onClick={() => setCurrentStep('process')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Process Data
            </button>
          </div>
          
          <DataPreview
            data={previewData}
            validationIssues={[]}
          />
        </div>
      )}
    </div>
  );
}

export default DataUpload;