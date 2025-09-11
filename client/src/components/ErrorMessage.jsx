import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ error }) => (
  error ? (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm max-w-2xl mx-auto">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <AlertCircle className="w-6 h-6 text-red-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-800 mb-1">
            Oops! Something went wrong
          </h3>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    </div>
  ) : null
);

export default ErrorMessage;