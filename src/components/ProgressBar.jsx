import React from 'react';

const ProgressBar = ({ value, label }) => {
  return (
    <div className="relative w-full flex items-center pt-1">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="absolute right-0 mr-2 text-sm text-gray-700">{label}</span>
    </div>
  );
};

export default ProgressBar;
