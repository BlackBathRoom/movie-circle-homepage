import { cn } from '@/lib/utils';

type Props = {
  href: `https://www.youtube.com/embed/${string}?si=${string}`;
  embedVideoTitle?: string;
  startAt?: number;
  className?: string;
};

const MoviePlayer: React.FC<Props> = ({
  href,
  embedVideoTitle = null,
  startAt = null,
  className = '',
}) => {
  const params = (<K extends string, V>(params: { [key in K]: V }): string =>
    Object.entries(params)
      .filter(([_, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&'))({
    start: startAt,
    modestbranding: 1,
    autoplay: 1,
  });

  return (
    <iframe
      src={`${href}&${params}`}
      className={cn(className)}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      title={embedVideoTitle || undefined}
    />
  );
};

export default MoviePlayer;
