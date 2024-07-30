// components/PromotionSection.tsx
import React from 'react';
import Link from 'next/link';

type PromotionSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  buttonLink: string;
};

const PromotionSection: React.FC<PromotionSectionProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  buttonLink,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-72 md:h-80 object-cover" /> {/* Reduced height */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-4 md:p-8">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 md:mb-4">{title}</h2>
        <p className="text-white text-sm md:text-base mb-2 md:mb-4 max-w-md md:max-w-lg">{description}</p>
        <Link href={buttonLink}
           className="border border-white px-4 md:px-6 py-2 text-white hover:bg-white hover:text-gray-800 transition duration-300">{buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PromotionSection;
