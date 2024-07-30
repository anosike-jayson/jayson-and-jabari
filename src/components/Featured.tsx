'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Featured = () => {
  const products = [
    {
      id: 1,
      name: "Green Flats",
      originalPrice: "$52.80",
      discountedPrice: "$14.80",
      discount: "-11%",
      imageUrl: "/images/green-shoe.jpg",
    },
    {
      id: 2,
      name: "High-Top Street",
      originalPrice: "$16.25",
      discountedPrice: "$7.99",
      discount: "-14%",
      imageUrl: "/images/high-tops.jpg",
    },
    {
      id: 3,
      name: "Men High-Top Blue",
      originalPrice: "$43.50",
      discountedPrice: "$10.50",
      discount: "-5%",
      imageUrl: "/images/blue-shoe.jpg",
    },
    {
      id: 4,
      name: "Black Emo Vans",
      originalPrice: "$30.50",
      discountedPrice: "$12.50",
      discount: "-5%",
      imageUrl: "/images/girl-vans.jpg",
    },
    {
      id: 5,
      name: "Black Emo Vans",
      originalPrice: "$30.50",
      discountedPrice: "$12.50",
      discount: "-9%",
      imageUrl: "/images/girl-vans.jpg",
    },
    {
      id: 6,
      name: "Black Emo Vans",
      originalPrice: "$30.50",
      discountedPrice: "$12.50",
      discount: "-9%",
      imageUrl: "/images/girl-vans.jpg",
    },
    {
      id: 7,
      name: "Black Emo Vans",
      originalPrice: "$30.50",
      discountedPrice: "$12.50",
      discount: "-9%",
      imageUrl: "/images/girl-vans.jpg",
    },
    {
      id: 8,
      name: "Black Emo Vans",
      originalPrice: "$30.50",
      discountedPrice: "$12.50",
      discount: "-9%",
      imageUrl: "/images/girl-vans.jpg",
    },
  ];

  const extendedProducts = [
    products[products.length - 1],
    ...products,
    products[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to avoid showing duplicated first item
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 1 ? extendedProducts.length - 2 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedProducts.length - 2 ? 1 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextClick();
    } else if (touchStartX.current - touchEndX.current < -50) {
      handlePrevClick();
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transition = 'none';
      setCurrentIndex(1);
    }
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transition = 'transform 0.5s ease';
    }
  }, [currentIndex]);

  return (
    <div className="px-4 py-12 md:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">Featured</h2>
        <Link href="/Shop" className="text-gray-900 hover:text-red-600">
          Shop All &rarr;
        </Link>
      </div>
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={carouselRef}
      >
        <div
          className="flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedProducts.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/4 p-2">
              <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-white text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                  {product.discount}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-sm md:text-lg font-semibold">
                    {product.name}
                  </h3>
                  <div className="mt-2 text-gray-400 line-through">
                    {product.originalPrice}
                  </div>
                  <div className="mt-1 text-xl font-bold">
                    {product.discountedPrice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Featured;
