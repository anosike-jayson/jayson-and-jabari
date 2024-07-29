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
      <img src={imageUrl} alt={title} className="w-full h-96 md:h-[500px] object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-white text-lg md:text-xl mb-4">{description}</p>
        <Link href={buttonLink} className="border border-white px-6 py-2 text-white hover:bg-white hover:text-gray-800 transition duration-300">{buttonText}</Link>
      </div>
    </div>
  );
};

export default PromotionSection;
