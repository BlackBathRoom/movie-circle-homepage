import type { NextPage } from 'next';

import { client } from '@/lib/microcms';
import Header from '@/components/ui/Header';
import MoviePlayer from '@/components/ui/MoviePlayer';
import Slider from '@/components/ui/Slider';

const Page: NextPage = async () => {
  const video = await client.getList({
    endpoint: 'movies',
    queries: { fields: ['url', 'title', 'startAt'] },
  });
  const images = await client.getList({
    endpoint: 'images',
    queries: { fields: ['image', 'title'] },
  });

  return (
    <div className="m-0 p-0">
      {/* 動画セクション */}
      <section className="relative h-screen w-full overflow-hidden">
        <MoviePlayer
          href={video.contents[0].url}
          embedVideoTitle={video.contents[0].title}
          startAt={video.contents[0].startAt}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </section>
      <Header />
      <div className="bg-gray-100">
        <Slider
          images={images.contents.map((data) => ({
            src: data.image.url,
            alt: data.title,
            width: data.image.width,
            height: data.image.height,
          }))}
        />
      </div>
    </div>
  );
};

export default Page;
