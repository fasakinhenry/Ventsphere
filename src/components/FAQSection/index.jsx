import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const FAQSection = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-clashGroteskBold tracking-tight text-gray-900 sm:text-4xl'>
            Frequently Asked Questions
          </h2>
          <div className='mt-6 border-t border-gray-200 pt-6'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between items-center w-full'>
                    <span className='font-medium text-gray-900'>
                      What services does Ventsphere offer?
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } h-6 w-6 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-4 text-gray-500'>
                    Ventsphere offers a wide range of services to support
                    startups, including financial backing, expert guidance, and
                    tailored solutions. Our team works closely with each of our
                    partners to understand their unique needs and provide the
                    support they require to succeed.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as='div' className='mt-6'>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex justify-between items-center w-full'>
                    <span className='font-medium text-gray-900'>
                      How does the funding process work?
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } h-6 w-6 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-4 text-gray-500'>
                    Our team of financial experts will work with you to
                    understand your funding needs and help you navigate the
                    process of securing the necessary capital. We have
                    established relationships with a wide network of investors
                    and can assist you in securing the funding you require to
                    grow your business.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as='div' className='mt-6'>
              <Disclosure.Button className='flex justify-between items-center w-full'>
                <span className='font-medium text-gray-900'>
                  What is the process for partnering with Ventsphere?
                </span>
                <ChevronDownIcon className='h-6 w-6 text-gray-500' />
              </Disclosure.Button>
              <Disclosure.Panel className='mt-4 text-gray-500'>
                To partner with Ventsphere, simply reach out to our team. We
                will schedule an initial consultation to understand your
                startup's needs and discuss how we can best support your growth
                and success. From there, we'll work collaboratively to develop a
                customized plan and timeline for our partnership.
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
