"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ease-in-out
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm'
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-3">
          {/* Logo - Left Side with Next.js Image */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden">
              <Image
                src="/logo.png" // Replace with your logo path
                alt="Satiate Logo"
                fill
                className="object-contain"
                priority
                sizes="64px"
              />
            </div>
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight ml-3">
              SATIATE
            </span>
          </div>

          {/* Desktop Menu - Left Side */}
          <div className="hidden lg:flex items-center space-x-8">
            {['How It Works', 'Program', 'Pricing', 'SUccess Stories', 'Download App'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`
                  relative text-gray-700 font-medium text-sm uppercase tracking-wider
                  transition-all duration-300 ease-in-out group py-2
                  hover:text-blue-600
                `}
              >
                {item}
                <span 
                  className={`
                    absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full
                    transition-all duration-300 ease-out group-hover:w-full
                  `}
                ></span>
              </a>
            ))}
          </div>

          {/* Contact Button/Icon - Right Side */}
          <div className="flex items-center space-x-4">
            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Start Free Trial</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                lg:hidden w-10 h-10 rounded-full flex items-center justify-center
                bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg
                hover:shadow-xl hover:scale-110 transition-all duration-300
                ${isMenuOpen && 'rotate-180'}
              `}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - PERFECTLY FIXED */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 pb-6">
          <div className="flex flex-col space-y-2 pt-4">
            {['About', 'Classes', 'Pricing', 'Schedule', 'Contacts'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="group relative flex items-center py-4 px-4 rounded-xl text-left
                  text-gray-700 font-medium text-base transition-all duration-300
                  hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80
                  hover:text-blue-600 hover:shadow-sm"
              >
                {/* Menu Item Text */}
                <span className="flex-1 font-semibold">{item}</span>
                
                {/* Beautiful Full-Width Underline Animation */}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-full
                    transition-all duration-500 ease-out group-hover:w-[100px] origin-left"
                ></span>
                
                {/* Subtle Right Arrow Animation */}
                <div className="ml-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 
                               transform group-hover:translate-x-1 group-hover:scale-110">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
            
            {/* Contact Button */}
            <a
              href="#contacts"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 flex items-center justify-center py-4 px-8 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;