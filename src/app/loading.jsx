import React from "react";

const LoadingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center mb-8">
        <div className="h-12 w-64 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 w-48 bg-gray-200 rounded"></div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar Skeleton */}
        <div className="col-span-3 space-y-4">
          <div className="h-8 w-full bg-gray-300 rounded mb-4"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-6 w-full bg-gray-200 rounded"></div>
          ))}
        </div>

        {/* Main Content Skeleton */}
        <div className="col-span-6 space-y-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="p-4 border rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="h-6 w-full bg-gray-300 rounded"></div>
              <div className="h-64 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        {/* Right Sidebar Skeleton */}
        <div className="col-span-3 space-y-6">
          <div className="h-24 w-full bg-gray-200 rounded"></div>
          <div className="h-64 w-full bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
