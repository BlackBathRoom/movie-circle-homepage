'use client';

import type { Movies } from '@/lib/microcms/types';
import { cn } from '@/lib/utils';

type FailMovies = Pick<Movies, 'url' | 'title' | 'startAt'>;

type Props = {
  movie: FailMovies;
  className?: string;
};

const MovieWorks: React.FC<Props> = ({ movie, className }) => {
  return (
    <div className={cn('py-6 px-4 flex flex-col items-center', className)}>
      <div className="flex items-center justify-center">
        <div className="w-full h-full max-w-4xl aspect-video bg-gray-100 shadow-md overflow-hidden">
          <iframe
            src={movie.url}
            title={movie.title || '動画'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieWorks;
