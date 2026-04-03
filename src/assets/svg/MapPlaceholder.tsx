import React from 'react';

export const MapPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-sand-100 rounded-2xl overflow-hidden border border-sand-200">
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-30">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8BDB0" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center shadow-lg mb-2 animate-bounce">
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
        <p className="font-serif text-slate-900 font-bold">KSTVET Counselling Centre</p>
        <p className="text-xs text-slate-500">Main Campus, Nairobi</p>
      </div>
    </div>
  );
};
