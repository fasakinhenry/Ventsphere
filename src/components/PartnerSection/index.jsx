import React from 'react';

const PartnerSection = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
          <div>
            <h2 className='text-3xl font-clashGroteskBold tracking-tight text-gray-900 sm:text-4xl'>
              Your Dedicated Partner in Startup Success
            </h2>
            <p className='mt-3 text-lg text-gray-500'>
              We are committed to providing the support and resources you need
              to succeed. Our team of experienced professionals will work
              closely with you to help your startup reach its full potential.
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
                    Our Mission
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    To empower startups and entrepreneurs by providing the
                    support, resources, and expertise they need to succeed.
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
                    Our Values
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Integrity, innovation, collaboration, and a relentless focus
                    on the success of our partners.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className='mt-10 sm:mt-0 lg:mt-0'>
            <div className='lg:max-w-lg'>
              <img
                className='h-56 w-full object-cover sm:h-64 md:h-96 lg:w-full lg:h-full'
                src='/partner-image.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
