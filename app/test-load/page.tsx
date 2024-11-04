'use client'
import React, { useState, useEffect } from 'react';

function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to delay rendering by 5 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div>
          {/* Content to render after delay */}
          <h1>Content is now displayed after 5 seconds!</h1>
        </div>
      ) : (
        // Optional loading indicator
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Page;
