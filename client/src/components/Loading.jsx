import React from 'react';

const Loading = () => (
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 text-center max-w-lg mx-auto space-y-6">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-blue-500 rounded-full mx-auto animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-teal-500 rounded-full mx-auto animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-slate-800">
        ✨ Polishing Your Content
      </h3>
      <p className="text-slate-600">
        Our AI is analyzing your post and generating insights...
      </p>
    </div>
    <div className="flex justify-center space-x-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
    </div>
  </div>
);

export default Loading;
