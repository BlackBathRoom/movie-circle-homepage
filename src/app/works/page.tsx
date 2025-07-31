import type { NextPage } from 'next';

import { client } from '@/lib/microcms';
import Slider from '@/components/ui/Slider';

const Page: NextPage = async () => {
  const movieThumbnails = await client
    .getList({
      endpoint: 'movies',
      queries: { fields: ['id', 'title', 'thumbnail'] },
    })
    .then((res) =>
      res.contents.map((content) => ({
        id: content.id,
        src: content.thumbnail?.url || '',
        alt: content.title,
        width: content.thumbnail?.width,
        height: content.thumbnail?.height,
      })),
    );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <h1 className="mb-9 text-center text-4xl font-bold text-zinc-700 sm:text-5xl md:text-6xl lg:text-8xl">
        ProductionMET
      </h1>
      <section className="relative h-screen w-full overflow-hidden">
        <Slider
          images={movieThumbnails.map((thumbnail) => ({
            src: thumbnail.src,
            alt: thumbnail.alt,
            width: thumbnail.width,
            height: thumbnail.height,
            href: `/works/${thumbnail.id}`,
          }))}
        />
      </section>
    </main>
  );
};

export default Page;
