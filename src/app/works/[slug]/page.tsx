import MoviePlayer from '@/components/MoviePlayer';
import { client } from '@/lib/microcms';
import type { NextPage } from 'next';

type Props = {
  params: { slug: string };
};

const Page: NextPage<Props> = async ({ params }) => {
  const { slug } = await params;
  const movie = await client.getListDetail({
    endpoint: 'movies',
    contentId: slug,
    queries: { fields: ['url', 'title', 'startAt', 'description'] },
  });

  return (
    <div className="px-3 py-2 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <MoviePlayer
          href={movie.url}
          embedVideoTitle={movie.title}
          startAt={movie.startAt}
          className=""
        />
        <span className="text-2xl font-bold text-gray-800 mt-4">
          {movie.title}
        </span>
      </div>
      <span className="text-lg text-gray-700">{movie.description}</span>
    </div>
  );
};

export default Page;
