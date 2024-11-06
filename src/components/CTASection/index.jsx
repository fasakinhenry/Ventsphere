import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-clashGroteskBold tracking-tight text-white sm:text-4xl">
          <span className="block">Let's Partner for Your</span>
          <span className="block">Startup Success</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-100"
            >
              Book a Strategy Call
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
            >
              Partner with Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
