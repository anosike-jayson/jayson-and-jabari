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

const KidsCategoryPage: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/images/green-shoe.jpg' },
  ];

  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-5xl font-bold mb-8">Deals for Kids</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default KidsCategoryPage;
