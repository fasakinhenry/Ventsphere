import React from 'react';

const UnlockingSection = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
          <div>
            <h2 className='text-3xl font-clashGroteskBold tracking-tight text-gray-900 sm:text-4xl'>
              Unlocking Potential for Ambitious Startups
            </h2>
            <p className='mt-3 text-lg text-gray-500'>
              Our team of experienced professionals is dedicated to helping
              startups like yours reach new heights. We provide the guidance,
              resources, and support you need to unlock your full potential and
              achieve success.
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
                    Expert Guidance
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Leverage our team's extensive experience to navigate the
                    challenges of starting and growing a successful business.
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
                    Tailored Support
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Our team works closely with you to understand your unique
                    needs and provide customized solutions to help you succeed.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className='mt-10 sm:mt-0 lg:mt-0'>
            <div className='lg:max-w-lg'>
              <img
                className='h-56 w-full object-cover sm:h-64 md:h-96 lg:w-full lg:h-full'
                src='/unlocking-image.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockingSection;
