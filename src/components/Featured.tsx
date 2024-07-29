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
  ];

  return (
    <div className="px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1 flex justify-center">
          <h2 className="text-4xl font-bold">Featured</h2>
        </div>
        <Link href="/Shop" className="text-grey-900 hover:text-red-600">
          Shop All &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-md overflow-hidden group">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <span className="absolute top-2 left-2 bg-white text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
              {product.discount}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 opacity-70 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="mt-2 text-gray-400 line-through">{product.originalPrice}</div>
              <div className="mt-1 text-xl font-bold">{product.discountedPrice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
