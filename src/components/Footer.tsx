import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold mb-4">Jayson And Jabari</div>
          <div className="flex space-x-4 mb-4">
            <Link href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-white hover:text-gray-400">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>Diam neque diam sed tincidunt lobortis facilisis massa eget scelerisque tincidunt amet in blandit maecenas egestas eu quam aenean odio urna facilisis integer tincidunt ut eu eu ultrices integer quisque vivamus felis leo massa maecenas in et tempus nisl morbi euismod iaculis pellentesque urna vulputate suspendisse eget sit.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Shop at Jayson&Jabari</h3>
          <ul className="space-y-2">
            <Link href="#" className="hover:text-gray-400">Shop</Link>
            <Link href="#" className="hover:text-gray-400">Top Deals</Link>
            <Link href="#" className="hover:text-gray-400">My account</Link>
            <Link href="#" className="hover:text-gray-400">Return Policy</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">About Jayson&Jabari</h3>
          <ul className="space-y-2">
            <Link href="#" className="hover:text-gray-400">About</Link>
            <Link href="#" className="hover:text-gray-400">SpartaX Tax</Link>
            <Link href="#" className="hover:text-gray-400">Press Room</Link>
            <Link href="#" className="hover:text-gray-400">Careers</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
          <p>Bundesstraße 123, 456 Hamburg, Germany</p>
          <p>Call: +49-1234-56-7</p>
          <p>mail@example.com</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Jayson and Jabari Stores</p>
        <p>Powered by Jayson and Jabari Stores</p>
      </div>
    </footer>
  );
};

export default Footer;
