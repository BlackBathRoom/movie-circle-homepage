import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MoviePlayer from '@/components/MoviePlayer';
import Slider from '@/components/Slider';
import { client } from '@/lib/microcms';
import type { NextPage } from 'next';

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
      <section className="relative w-full h-screen overflow-hidden">
        <MoviePlayer
          href={video.contents[0].url}
          embedVideoTitle={video.contents[0].title}
          startAt={video.contents[0].startAt}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </section>
      <Header />
      <section>
        <Slider
          images={images.contents.map((data) => ({
            src: data.image.url,
            alt: data.title,
            width: data.image.width,
            height: data.image.height,
          }))}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Page;
