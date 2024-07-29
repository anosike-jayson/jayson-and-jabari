import Link from 'next/link';
import React from 'react';

// Update the deals array to include image URLs
const deals = [
  { id: 1, title: '50% Off on Summer Collection', link: '#', image: '/images/blue-vans.jpg' },
  { id: 2, title: 'Buy 1 Get 1 Free', link: '#', image: '/images/blue-shoe.jpg' },
  { id: 3, title: 'Exclusive Winter Sale', link: '#', image: '/images/girl-vans.jpg' },
  { id: 4, title: 'Clearance Sale', link: '#', image: '/images/green-shoe.jpg' }
];

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-100">
      <div>
        <h2 className="text-xl font-bold">Hottest Deals</h2>
        <ul className="mt-2 space-y-4">
          {deals.map(deal => (
            <li key={deal.id} className="bg-white border border-gray-200 rounded-lg">
              <Link href={deal.link} className="block">
                <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{deal.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
