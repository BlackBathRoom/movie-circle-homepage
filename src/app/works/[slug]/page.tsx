import type { NextPage } from 'next';

import { client } from '@/lib/microcms';
import MoviePlayer from '@/components/ui/MoviePlayer';

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
    <div className="bg-gray-600 py-12 px-4">
      <div className="min-h-screen px-3 py-2 flex flex-col items-center gap-5 ">
        <div className="relative w-full flex flex-col items-center  px-5">
          <MoviePlayer
            href={movie.url}
            embedVideoTitle={movie.title}
            startAt={movie.startAt}
            className=" w-3/5 max-w-[900px] aspect-video"
          />
        </div>
        <div className="w-3/5 max-w-[900px] bg-gray-100 shadow-md gap-4 p-6 flex flex-col ">
          <span className="block text-3xl font-bold text-gray-800 mb-4 mt-4 px-4">
            {movie.title}
          </span>
          <span className="block p-6 text-lg text-gray-700 mb-4 mt-4 px-4">
            {movie.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
