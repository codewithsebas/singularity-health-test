import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-10 flex flex-col h-full min-h-80 w-full">
      <Image
        src="/Footer.svg"
        alt="Background Footer"
        width={1000}
        height={1000}
        className="absolute top-0 h-full w-full object-cover object-top"
      />

      <div className="container relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 pb-10 pt-28 md:grid-cols-3 lg:grid-cols-4">
        <section aria-labelledby="footer-about">
          <h2 id="footer-about" className="mb-4 text-lg font-bold text-gold">
            About
          </h2>
          <nav aria-label="About">
            <ul className="space-y-2 font-light text-white">
              <li>
                <a href="#" className="hover:underline">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Franchise With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Make Fetch Happen!
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section aria-labelledby="footer-resources">
          <h2
            id="footer-resources"
            className="mb-4 text-lg font-bold text-gold"
          >
            Resources
          </h2>
          <nav aria-label="Resources">
            <ul className="space-y-2 font-light text-white">
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pet Resource Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Media Fact Sheet
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section aria-labelledby="footer-gift-cards">
          <h2
            id="footer-gift-cards"
            className="mb-4 text-lg font-bold text-gold"
          >
            Gift Cards
          </h2>
          <nav aria-label="Gift Cards">
            <ul className="space-y-2 font-light text-white">
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Franchisee Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section aria-labelledby="footer-newsletter" className='hidden sm:block'>
          <h2
            id="footer-newsletter"
            className="mb-4 text-lg font-bold text-gold"
          >
            Newsletter
          </h2>
          <p className="mb-4 font-light text-white">
            Sign up to receive the Fetch! Family Newsletter
          </p>
          <form
            className="flex justify-between gap-1 rounded-full bg-white p-1"
            aria-label="Newsletter Signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent ps-3 text-gray outline-none"
            />
            <button
              type="submit"
              className="flex h-10 min-w-10 items-center justify-center rounded-full bg-coral text-white"
              aria-label="Submit Email"
            >
              <MoveRight />
            </button>
          </form>
        </section>
      </div>

      <section aria-labelledby="footer-newsletter" className='flex flex-col sm:hidden relative z-20 mb-5 px-5 sm:px-0 '>
          <h2
            id="footer-newsletter"
            className="mb-4 text-lg font-bold text-gold"
          >
            Newsletter
          </h2>
          <p className="mb-4 font-light text-white">
            Sign up to receive the Fetch! Family Newsletter
          </p>
          <form
            className="flex justify-between gap-1 rounded-full bg-white p-1"
            aria-label="Newsletter Signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent ps-3 text-gray outline-none"
            />
            <button
              type="submit"
              className="flex h-10 min-w-10 items-center justify-center rounded-full bg-coral text-white"
              aria-label="Submit Email"
            >
              <MoveRight />
            </button>
          </form>
        </section>
    </footer>
  );
};

export default Footer;
