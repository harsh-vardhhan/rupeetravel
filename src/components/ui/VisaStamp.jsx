"use client"

import React from 'react';
import { cn } from "../util/utils";

const VisaStamp = () => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="flex justify-center items-center bg-white p-4">
      <div className="relative">
        {/* Main stamp container */}
        <div className={cn(
          "relative bg-white border-4 border-red-600 rounded-lg p-6 shadow-lg overflow-hidden",
          "w-[90vw] sm:w-[350px] md:w-[400px] max-w-[400px]"
        )}>
          {/* Decorative border pattern */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-dashed border-red-500 rounded-md" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col space-y-3">
            {/* Header */}
            <div className="flex flex-col space-y-1 pb-2 border-b-2 border-red-600 w-full">
              <p className="text-base sm:text-lg font-bold text-red-700 uppercase tracking-wide text-center">
                Republic of Indonesia
              </p>
              <p className="text-xs sm:text-sm font-semibold text-red-600 uppercase text-center">
                Ministry of Tourism
              </p>
            </div>
            
            {/* Visa Type */}
            <div className="py-2">
              <p className="text-lg sm:text-xl font-bold text-black uppercase text-center">
                Tourist Visa
              </p>
            </div>
            
            {/* Visa Details */}
            <div className="flex flex-col space-y-2 text-sm w-full">
              <div className="flex justify-between w-full">
                <span className="font-semibold text-gray-700">VISA:</span>
                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md">
                  B2
                </span>
              </div>
              
              <div className="flex justify-between w-full">
                <span className="font-semibold text-gray-700">DURATION:</span>
                <span className="font-bold text-black">30 DAYS</span>
              </div>
              
              <div className="flex justify-between w-full">
                <span className="font-semibold text-gray-700">FEE:</span>
                <span className="font-bold text-green-700">500,000 IDR</span>
              </div>
            </div>
            
            {/* Date and stamp info */}
            <div className="flex flex-col space-y-1 pt-3 mt-4 border-t-2 border-red-600 w-full">
              <div className="flex justify-between text-xs w-full">
                <span className="text-gray-600">ISSUED:</span>
                <span className="font-semibold text-black">{currentDate}</span>
              </div>
              <div className="flex justify-between text-xs w-full">
                <span className="text-gray-600">ENTRY:</span>
                <span className="font-semibold text-black">DENPASAR</span>
              </div>
            </div>
          </div>
          
          {/* Background watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 text-6xl font-bold text-red-600 opacity-5 pointer-events-none z-[1]">
            VISA
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaStamp;