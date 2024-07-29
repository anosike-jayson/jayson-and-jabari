import React from 'react';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const CategoryPage: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300, image: '/images/green-shoe.jpg' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 400, image: '/images/green-shoe.jpg' },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 500, image: '/images/green-shoe.jpg' },
    { id: 6, name: 'Product 6', description: 'Description 6', price: 600, image: '/images/green-shoe.jpg' },
    { id: 7, name: 'Product 7', description: 'Description 7', price: 700, image: '/images/green-shoe.jpg' },
    { id: 8, name: 'Product 8', description: 'Description 8', price: 800, image: '/images/green-shoe.jpg' },
    { id: 9, name: 'Product 9', description: 'Description 9', price: 900, image: '/images/green-shoe.jpg' },
    { id: 10, name: 'Product 10', description: 'Description 10', price: 1000, image: '/images/green-shoe.jpg' },
  ];

  return (
    <div className="flex flex-col md:flex-row pt-20">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-5xl font-bold mb-8">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
