import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Jayson and Jabari</h2>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <Link href="#" aria-label="Facebook"><FaFacebookF className="w-6 h-6" /></Link>
            <Link href="#" aria-label="Twitter"><FaTwitter className="w-6 h-6" /></Link>
            <Link href="#" aria-label="YouTube"><FaYoutube className="w-6 h-6" /></Link>
            <Link href="#" aria-label="Instagram"><FaInstagram className="w-6 h-6" /></Link>
          </div>
          <p>© 2024 Fashion and Clothing</p>
        </div>
        <div className="text-center md:text-left">
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Shop Now</Link></li>
            <li><Link href="#" className="hover:underline">Categories</Link></li>
            <li><Link href="#" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p>
            PortHarcourt, Rivers State, Nigeria
            <br />
            Call: 09132823394
            <br />
            soldreofficial@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
