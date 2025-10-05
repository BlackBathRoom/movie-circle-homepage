import type { NextPage } from 'next';

import { client } from '@/lib/microcms';
import PageFrame from '@/components/layout/PageFrame';
import MovieSection from '@/components/ui/MovieSection';
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
      <MovieSection
        video={{
          url: video.contents[0]?.url || '',
          title: video.contents[0]?.title || '',
          startAt: video.contents[0]?.startAt || 0,
        }}
      />
      <PageFrame>
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
      </PageFrame>
    </div>
  );
};

export default Page;
