'use client';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
};

const PhotoWorks: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const image = images[currentIndex];

  return (
    <div className="py-6 px-4 flex flex-col items-center">
      <div
        onClick={handleClick}
        className="cursor-pointer bg-gray-100 p-4 shadow-md"
      >
        <div className="relative w-[650px] h-[500px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain shadow-md"
          />
        </div>
      </div>
      <p className="mt-2 text-gray-400">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
};

export default PhotoWorks;
