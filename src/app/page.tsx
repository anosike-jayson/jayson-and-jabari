import { FaShippingFast, FaWallet, FaBoxOpen } from 'react-icons/fa';
import Hero from "@/components/Hero";
import Featured from "../components/Featured";
import Link from "next/link";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <Featured />
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-white text-black shadow-md">
              <FaWallet className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium">Secure Payment</p>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-12"></div>
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-white text-black shadow-md">
              <FaShippingFast className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium">Free Shipping</p>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-12"></div>
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-white text-black shadow-md">
              <FaBoxOpen className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium">Free Returns</p>
          </div>
        </div>
      </div>
    </section>
      <section className="relative w-full h-[400px] bg-gray-800">
        <img
          src="/images/ics-skates.jpg"
          alt="Fashion Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-grey-900 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Make Your Fashion Count</h2>
          <p className="text-lg mb-8">Show the world what these Vans and kicks are made of.</p>
          <div className="flex space-x-4">
            <Link href="/Categories/men" className="border border-black px-6 py-2 text-black hover:bg-white hover:text-gray-800 transition duration-300">Shop for Men</Link>
            <Link href="/Categories/women" className="border border-black px-6 py-2 text-black hover:bg-white hover:text-gray-800 transition duration-300">Shop for Women</Link>
          </div>
        </div>
      </section>
    </div>
  );
}