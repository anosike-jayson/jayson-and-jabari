import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-100">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <ul className="mt-2">
          <li><a href="#" className="text-gray-700">Accessories</a> (6)</li>
          <li><a href="#" className="text-gray-700">Shoes</a> (5)</li>
          <li><a href="#" className="text-gray-700">Skirts</a> (4)</li>
          <li><a href="#" className="text-gray-700">Tops</a> (6)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Filter by price</h2>
        <input type="range" min="0" max="100" className="w-full mt-2" />
        <div className="flex justify-between mt-2">
          <span>$0</span>
          <span>$100</span>
        </div>
        <button className="mt-4 w-full bg-black text-white py-2">Apply</button>
      </div>
      <div>
        <h2 className="text-xl font-bold">Hottest Deals</h2>
        {/* Add hottest deals items */}
      </div>
    </aside>
  );
};

export default Sidebar;
