"use client"; // Add this directive at the top

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(3); // Example cart item count
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show the navbar when scrolling up, and keep it visible at the top of the page
      if (window.scrollY < 10 || window.scrollY < lastScrollY) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm py-5 px-2 md:px-20 shadow-lg transition-transform duration-300 ${showNavBar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold text-black">Jayson & Jabari</h1>
        </div>
        <button
          onClick={handleToggle}
          className="md:hidden text-3xl"
          aria-label="Toggle Navigation"
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links flex-1 flex justify-center space-x-8 md:flex ${isNavOpen ? 'flex' : 'hidden'} md:block`}>
          <Link href="/" className="text-black text-lg hover:text-green-700">HOME</Link>
          <Link href="#about" className="text-black text-lg hover:text-green-700">ABOUT</Link>
          <Link href="/Shop" className="text-black text-lg hover:text-green-700">SHOP</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className="text-black text-lg flex items-center hover:text-green-700"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              CATEGORIES <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md z-40">
                <Link href="/Categories/men" className="block px-4 py-2 text-black hover:bg-gray-100">Men</Link>
                <Link href="/Categories/women" className="block px-4 py-2 text-black hover:bg-gray-100">Women</Link>
                <Link href="/Categories/kids" className="block px-4 py-2 text-black hover:bg-gray-100">Kids</Link>
                <Link href="/Categories/unisex" className="block px-4 py-2 text-black hover:bg-gray-100">Unisex</Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="/my-cart" className="relative text-black text-xl hover:text-green-700">
            <FaShoppingCart className="text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link href="/profile" className="text-black text-xl hover:text-green-700">
            <FaUser className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
