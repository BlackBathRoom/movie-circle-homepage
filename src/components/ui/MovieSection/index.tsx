'use client';

import { useLayoutEffect, useState } from 'react';

import MoviePlayer from '@/components/ui/MoviePlayer';

type VideoSec = {
  url: `https://www.youtube.com/embed/${string}?si=${string}`;
  title?: string;
  startAt?: number;
};

export default function MovieSection({ video }: { video: VideoSec }) {
  const [opacity, setOpacity] = useState(1);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const newOpacity = Math.max(1 - window.scrollY / 800, 0);
      setOpacity(newOpacity);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden transition-opacity duration-300"
      style={{ opacity: 1 }}
    >
      <MoviePlayer
        href={video.url}
        embedVideoTitle={video.title}
        startAt={video.startAt}
        className="absolute top-0 left-0 h-full w-full object-cover"
        style={{ opacity }}
      />
    </section>
  );
}
