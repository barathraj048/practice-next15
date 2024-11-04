'use client'
import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second fetch delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          {/* Add your loading spinner or message */}
          <div className="loader animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <p className="ml-4 text-xl text-gray-600">Loading, please wait...</p>
        </div>
      ) : (
        // Content to show after loading completes
        <div>
          <h1>Data Loaded Successfully!</h1>
          <p>Your content goes here.</p>
        </div>
      )}
    </div>
  );
};

export default Loader;
