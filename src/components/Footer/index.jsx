import React from 'react';

const footerLinks = [
  { title: 'Service', link: '#' },
  { title: 'About us', link: '#' },
  { title: 'Benefits', link: '#' },
  { title: 'FAQ ?', link: '#' },
];

const Footer = () => {
  return (
    <footer className='bg-gray-800'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h4 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Company
                </h4>
                <ul className='mt-4 space-y-4'>
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.link}
                        className='text-base text-gray-300 hover:text-white'
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Add more footer sections as needed */}
            </div>
          </div>
          <div className='mt-8 xl:mt-0'>
            <h4 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
              Subscribe to our newsletter
            </h4>
            <p className='mt-4 text-base text-gray-300'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className='mt-4 sm:flex sm:max-w-md'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                type='email'
                name='email-address'
                id='email-address'
                autoComplete='email'
                required
                className='appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs'
                placeholder='Enter your email'
              />
              <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                <button
                  type='submit'
                  className='w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'>
            {/* Add social media links here */}
          </div>
          <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
            &copy; 2023 Ventsphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
