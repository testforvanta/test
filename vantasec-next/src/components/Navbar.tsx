import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-50 py-6 px-4 sm:px-8 lg:px-16 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <span id="logo-image" className="cursor-pointer">
              {/* Assuming logo.png is moved to public directory */}
              <Image src="/logo.png" alt="VantaSec Logo" width={160} height={40} className="h-10 w-auto" />
            </span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8 hover:decoration-cyan-400">
            Services
          </Link>
          <Link href="#solutions" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8 hover:decoration-purple-500">
            Solutions
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8 hover:decoration-cyan-400">
            About
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8 hover:decoration-purple-500">
            Contact
          </Link>
        </div>

        <button className="md:hidden text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>

        <div className="hidden md:block">
          <Link href="#contact" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-all duration-300 btn-hover-grow">
            Get Protected
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
