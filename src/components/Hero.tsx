import Link from "next/link";

const Hero = () => {
    return (
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-32">
        <div className="text-white max-w-md space-y-4">
          <h1 className="text-3xl md:text-7xl font-bold text-gray-900" style={{ letterSpacing: '-0.01em' }}>
            Everything <br />
            <span className="text-red-600">Sneakers.</span>
          </h1>
          <p className="text-gray-900 text-lg md:text-xl">
            Make the most out of Fashion.
          </p>
          <div className="flex items-center text-gray-900 space-x-2 text-base md:text-lg">
            <Link href="/Shop" className="flex items-center">
              <span>Shop now</span>
              <svg className="w-4 h-4 md:w-6 md:h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Hero;
  