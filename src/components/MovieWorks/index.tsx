'use client';

import MoviePlayer from '@/components/MoviePlayer';
import type { Movies } from '@/lib/microcms/types';
import { cn } from '@/lib/utils';

type Movie = Pick<Movies, 'url' | 'title' | 'startAt'>;

type Props = {
  movie: Movie;
  className?: string;
};

const MovieWorks: React.FC<Props> = ({ movie, className }) => {
  return (
    <div className={cn('aspect-video bg-gray-100 shadow-md', className)}>
      <MoviePlayer
        href={movie.url}
        embedVideoTitle={movie.title}
        startAt={movie.startAt}
        className="w-full h-full"
      />
    </div>
  );
};

export default MovieWorks;
