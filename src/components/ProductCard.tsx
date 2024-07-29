// components/ProductCard.tsx
import React from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative bg-white shadow-md rounded-md overflow-hidden">
      {/* Container for the image */}
      <div className="w-full h-64 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
        {/* Static gradient overlay with title and description */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex flex-col justify-end p-4">
          <h3 className="text-lg font-bold text-white">{product.name}</h3>
          <p className="mt-2 text-white font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
