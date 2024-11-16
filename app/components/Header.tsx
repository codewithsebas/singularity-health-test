'use client';

import { AlignRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ListNav = [
    { title: 'Location', href: '/ubication' },
    { title: 'Blog', href: '/news' },
    { title: 'Services', href: '/services' },
    { title: 'About Us', href: '/about' },
    { title: 'Franchise with Us', href: '/franchise' },
    { title: 'Log In', href: '/auth/login' },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-30 w-full bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-5">
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Image src="/pet.svg" alt="Logo" width={30} height={30} />
          </div>
        </div>

        <button
          className="relative z-20 text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={30} /> : <AlignRight size={30} />}
        </button>

        <nav
          className={`${isMobileMenuOpen ? 'flex -translate-y-16 opacity-100 md:translate-y-0' : 'translate-y-[-130%] opacity-100 md:translate-y-0'} absolute left-0 right-0 top-full z-10 w-full flex-col items-center gap-6 bg-coral p-5 transition-all duration-300 ease-out md:relative md:flex md:w-auto md:flex-row md:bg-transparent md:p-0`}
        >
          <ul className="flex w-full flex-col gap-6 sm:items-center md:flex-row">
            {ListNav.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-gray-100 font-light text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
