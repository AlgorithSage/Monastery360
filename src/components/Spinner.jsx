import React from 'react';

// A simple loading spinner component to indicate that data is being fetched.
function Spinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div 
        className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-emerald-400"
        role="status"
        aria-label="Loading..."
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;

