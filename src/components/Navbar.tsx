import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent p-4 px-10 flex justify-between items-center z-50">
      <div className="text-black font-bold text-xl">Jayson&Jabari</div>
      <div className="flex space-x-6">
        <Link href="#shop-all" className="text-black">SHOP ALL</Link>
        <Link href="#men" className="text-black">MEN</Link>
        <Link href="#women" className="text-black">WOMEN</Link>
        <Link href="#packs-gear" className="text-black">UNISEX</Link>
        <Link href="/Categories" className="text-black">CATEGORIES</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/cart" className='relative text-black'><FaShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
        </Link>
        <Link href="/user" className='text-black'><FaUser size={24}/></Link>
      </div>
    </nav>
  );
};

export default Navbar;
