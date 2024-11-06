import React from 'react';

const FinancialSection = () => {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
          <div className='lg:col-start-2'>
            <h2 className='text-3xl font-clashGroteskBold tracking-tight text-gray-900 sm:text-4xl'>
              Financial Backing You Need to Succeed
            </h2>
            <p className='mt-3 text-lg text-gray-500'>
              We provide the financial resources and support your startup needs
              to grow and thrive. Our team of experts will work with you to
              secure the funding and investment you require.
            </p>
            <dl className='mt-10 space-y-10'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                    {/* Icon goes here */}
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Funding Access
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Tap into our network of investors and secure the funding you
                    need to scale your business.
                  </dd>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                    {/* Icon goes here */}
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Financial Guidance
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Our team of financial experts will provide you with the
                    guidance and support you need to manage your finances
                    effectively.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className='mt-10 sm:mt-0 lg:mt-0 lg:col-start-1'>
            <div className='lg:max-w-lg'>
              <img
                className='h-56 w-full object-cover sm:h-64 md:h-96 lg:w-full lg:h-full'
                src='/financial-image.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSection;
