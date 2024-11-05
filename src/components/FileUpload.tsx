import React, { useCallback } from 'react';
import { Upload, FileType, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

function FileUpload({ onFileSelect }: FileUploadProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="mx-auto flex flex-col items-center max-w-xs">
        <Upload className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Upload your data file
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Drag and drop your file here, or click to browse
        </p>
        <input
          type="file"
          className="hidden"
          onChange={handleFileInput}
          accept=".csv,.xlsx,.xls,.json"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Select File
        </label>
        <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
          <p className="flex items-center gap-1">
            <FileType className="h-4 w-4" />
            Supported formats: CSV, Excel, JSON
          </p>
          <p className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            Maximum file size: 10MB
          </p>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;