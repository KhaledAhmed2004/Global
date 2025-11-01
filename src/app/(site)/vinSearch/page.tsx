// "use client";

// import React, { useState } from "react";
// import { Search } from "lucide-react";

// export default function VinSearchSection() {
//   const [vin, setVin] = useState("");
//   const maxLength = 17;
//   const charCount = vin.length;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (vin.length === 17) {
//       alert(`Validating VIN: ${vin}`);
//       // Add your API call here
//     } else {
//       alert("Please enter a valid 17-digit VIN.");
//     }
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
//           Enter Vehicle Identification Number
//         </h1>
//         <p className="text-lg text-gray-600 mb-10">
//           Get instant access to comprehensive vehicle history reports
//         </p>

//         {/* VIN Input Form */}
//         <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
//           <div className="relative bg-white p-2 rounded-2xl shadow-lg flex items-center gap-3">
//             {/* Input */}
//             <input
//               type="text"
//               value={vin}
//               onChange={(e) =>
//                 setVin(e.target.value.toUpperCase().slice(0, maxLength))
//               }
//               placeholder="Enter 17-digit VIN (e.g. 1HGHB41JXMN109186)"
//               className="flex-1 px-6 py-4 text-lg text-gray-700 bg-transparent outline-none placeholder-gray-400"
//               maxLength={maxLength}
//             />

//             {/* Validate Button */}
//             <button
//               type="submit"
//               className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
//             >
//               <Search className="w-5 h-5" />
//               Validate
//             </button>
//           </div>

//           {/* Character Counter */}
//           <p className="mt-2 text-sm text-gray-500">
//             {charCount}/{maxLength} characters
//           </p>
//         </form>

//         {/* Stats Row */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             {
//               value: "1M+",
//               label: "Reports Delivered",
//               color: "text-purple-600",
//             },
//             { value: "50+", label: "Data Sources", color: "text-blue-600" },
//             { value: "99.9%", label: "Accuracy Rate", color: "text-green-600" },
//             {
//               value: "24/7",
//               label: "Customer Support",
//               color: "text-orange-600",
//             },
//           ].map((stat) => (
//             <div key={stat.label} className="text-center">
//               <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
//               <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// components/VinSearchSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Search, AlertCircle, XCircle } from 'lucide-react';
import Hero from '../../../components/sections/Hero';

export default function VinSearchSection() {
  const [vin, setVin] = useState('');
  const maxLength = 17;
  const charCount = vin.length;
  const isValid = charCount === maxLength;
  const [showError, setShowError] = useState(false);

  // Auto-hide error after 3 seconds
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert(`Validating VIN: ${vin}`);
      // Call your API here
    } else {
      setShowError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '').slice(0, maxLength);
    setVin(value);
    setShowError(false);
  };

  return (
    <>
      <Hero />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Enter Vehicle Identification Number
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Get instant access to comprehensive vehicle history reports
        </p>

        {/* VIN Input Form */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative bg-white p-2 rounded-2xl shadow-lg flex items-center gap-3 transition-all">
            {/* Input */}
            <input
              type="text"
              value={vin}
              onChange={handleChange}
              placeholder="Enter 17-digit VIN (e.g. 1HGHB41JXMN109186)"
              className={`flex-1 px-6 py-4 text-lg bg-transparent outline-none placeholder-gray-400 transition-all ${
                !isValid && charCount > 0 ? 'text-red-600' : 'text-gray-700'
              }`}
              maxLength={maxLength}
            />

            {/* Validate Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`flex items-center gap-2 px-6 py-3 font-medium rounded-full shadow-md transition-all duration-200 ${
                isValid
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Search className="w-5 h-5" />
              Validate
            </button>

            {/* Invalid Badge (only if invalid) */}
            {charCount > 0 && !isValid && (
              <div className="absolute right-28 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                <XCircle className="w-4 h-4" />
                Invalid VIN
              </div>
            )}
          </div>

          {/* Character Counter */}
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className={`font-medium ${charCount === 17 ? 'text-green-600' : 'text-gray-500'}`}>
              {charCount}/{maxLength} characters
            </span>
          </div>

          {/* Error Message */}
          {showError && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2 animate-fade-in">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>VIN must be exactly 17 characters</span>
            </div>
          )}
        </form>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '1M+', label: 'Reports Delivered', color: 'text-purple-600' },
            { value: '50+', label: 'Data Sources', color: 'text-blue-600' },
            { value: '99.9%', label: 'Accuracy Rate', color: 'text-green-600' },
            { value: '24/7', label: 'Customer Support', color: 'text-orange-600' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        </div>
      </section>
    </>
  );
}