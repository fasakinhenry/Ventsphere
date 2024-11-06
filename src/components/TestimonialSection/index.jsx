import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-clashGroteskBold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories from Visionary Founders
            </h2>
            <blockquote className="mt-6">
              <div className="relative text-lg font-medium text-gray-900 md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  "Ventsphere has been an invaluable partner in our startup's
                  journey. Their team's expertise and dedication have been
                  instrumental in our success."
                </p>
              </div>
              <footer className="mt-6">
                <div className="flex items-start">
                  <div className="pr-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/testimonial-avatar.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="text-base font-medium text-gray-900">
                      Samantha Johnson
                    </div>
                    <div className="text-base text-gray-500">
                      CEO, Innovative Solutions
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="mt-12 lg:mt-0">
            <blockquote className="mt-6">
              <div className="relative text-lg font-medium text-gray-900 md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  "As a founder, I've been incredibly impressed with the level of
                  support and guidance Ventsphere has provided. They've truly
                  been a partner in our success."
                </p>
              </div>
              <footer className="mt-6">
                <div className="flex items-start">
                  <div className="pr-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/testimonial-avatar.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="text-base font-medium text-gray-900">
                      Michael Chen
                    </div>
                    <div className="text-base text-gray-500">
                      Co-founder, Disruptive Innovations
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
