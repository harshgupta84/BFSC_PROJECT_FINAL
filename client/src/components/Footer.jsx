import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-700">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
              Want to know more about DreamFund? Subscribe to our monthly newsletter.
            </strong>

            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>

                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder="Write your email"
                />

                <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <div className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
                Join our community of changemakers and creators. Empowering innovation, one contribution at a time.
                Together, we're turning ideas into reality, one pledge at a time.
              </div>

              <div className="mt-6 flex font-bold justify-center gap-4 lg:justify-start">
              <a
                      className="text-black transition hover:text-white"
                      href="#"
                    >
                      Social Links
                    </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
              <div>
                <strong className="font-medium text-gray-900">Services</strong>
                <ul className="mt-6 space-y-1">
                  <li>
                    <a
                      className="text-black transition hover:text-white"
                      href="#"
                    >
                      Campaign
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black transition hover:text-white"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black transition hover:text-white"
                      href="#"
                    >
                      Education
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div>
                <strong className="font-medium text-gray-900">Contact Us</strong>
                <div className="mt-6 space-y-1">
                  <p>
                    Address: Jaipur, Rajasthan, India.
                  </p>
                  <p>
                    Phone: 1800 240 300
                  </p>
                  <p>
                    Email: info@dreamfund.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-sm text-gray-500">
              © Company 2022. All rights reserved.
              <br />
              Created with{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                DreamFund
              </a>{" "}
              
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
