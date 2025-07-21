'use client';
import { useState } from 'react';

type Props = {
  videos: {
    videoId: string;
    title?: string;
  }[];
};

const PhotoWorks: React.FC<Props> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const video = videos[currentIndex];

  return (
    <div className="py-6 px-4 flex flex-col items-center">
      <div className="flex items-center justify-center space-x-4 md:space-x-10">
        <button
          onClick={handlePrev}
          className="text-5xl sm:text-6xl md:text-8xl text-gray-400 hover:text-gray-600 transition-colors select-none"
        >
          ◀
        </button>

        <div className="w-[90vw] sm:w-[500px] md:w-[650px] aspect-video bg-gray-100 shadow-md">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&modestbranding=1`}
            title={video.title || `Video ${currentIndex + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded shadow-md"
          />
        </div>

        <button
          onClick={handleNext}
          className="text-5xl sm:text-6xl md:text-8xl text-gray-400 hover:text-gray-600 transition-colors select-none"
        >
          ▶
        </button>
      </div>

      <p className="mt-4 text-gray-400">
        {currentIndex + 1} / {videos.length}
      </p>
    </div>
  );
};

export default PhotoWorks;
