import type { NextPage } from 'next';

import { client } from '@/lib/microcms';
import MoviePlayer from '@/components/ui/MoviePlayer';

type Props = {
  params: Promise<{ slug: string }>;
};

const Page: NextPage<Props> = async ({ params }) => {
  const { slug } = await params;
  const movie = await client.getListDetail({
    endpoint: 'movies',
    contentId: slug,
    queries: { fields: ['url', 'title', 'startAt', 'description'] },
  });

  return (
    <div className="bg-gray-600 px-4 py-12">
      <div className="flex min-h-screen flex-col items-center gap-5 px-3 py-2">
        <div className="relative flex w-full flex-col items-center px-5">
          <MoviePlayer
            href={movie.url}
            embedVideoTitle={movie.title}
            startAt={movie.startAt}
            className="aspect-video w-3/5 max-w-[900px]"
          />
        </div>
        <div className="flex w-3/5 max-w-[900px] flex-col gap-4 bg-gray-100 p-6 shadow-md">
          <span className="mt-4 mb-4 block px-4 text-3xl font-bold text-gray-800">
            {movie.title}
          </span>
          <span className="mt-4 mb-4 block p-6 px-4 text-lg text-gray-700">
            {movie.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
