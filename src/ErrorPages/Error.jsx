import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full">

        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Something went wrong
        </h2>

        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or an unexpected error occurred.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition"
          >
            Go Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-xl transition"
          >
            Retry
          </button>
        </div>

      </div>
    </div>
  );
};

export default Error;
