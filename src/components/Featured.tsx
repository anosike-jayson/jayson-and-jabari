import Link from 'next/link';
const Featured = () => {
    const products = [
      {
        id: 1,
        name: "Tempor id backpack 8L",
        originalPrice: "$72.80",
        discountedPrice: "$64.80",
        discount: "-11%",
        imageUrl: "/images/green-shoe.jpg",
      },
      {
        id: 2,
        name: "Purus elit helmet",
        originalPrice: "$56.25",
        discountedPrice: "$48.50",
        discount: "-14%",
        imageUrl: "/images/high-tops.jpg",
      },
      {
        id: 3,
        name: "Nibh backpack augue 12L",
        originalPrice: "$96.50",
        discountedPrice: "$96.50",
        discount: "-5%",
        imageUrl: "/images/blue-shoe.jpg",
      },
      {
        id: 4,
        name: "Tent maecenas pulvinar orange",
        originalPrice: "$48.24",
        discountedPrice: "$40.00",
        discount: "-17%",
        imageUrl: "/images/blue-vans.jpg",
      },
    ];
  
    return (
      <div className="px-6 py-12 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured</h2>
          <Link href="#shop-all" className="text-red-600 hover:underline">Shop All &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="relative bg-white rounded-lg shadow-md overflow-hidden group">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-white text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                {product.discount}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
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
  