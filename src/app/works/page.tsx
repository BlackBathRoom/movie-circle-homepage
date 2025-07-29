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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-600 py-12 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-9 text-white text-center">
        ProductionMET
      </h1>
      <section className=" relative w-full h-screen overflow-hidden ">
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
