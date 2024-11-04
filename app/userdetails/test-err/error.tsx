'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

interface ErrorPageProps {
  statusCode?: number;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode, message }) => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        {statusCode ? `Error ${statusCode}` : 'An unexpected error occurred.'}
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        {message || 'Sorry for the inconvenience. Please try again later.'}
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
