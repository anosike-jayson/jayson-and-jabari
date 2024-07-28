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
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
      <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="mt-2 text-black font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
