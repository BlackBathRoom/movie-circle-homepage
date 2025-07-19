import Slider from '@/components/Slider';
import { client } from '@/lib/microcms';
import type { NextPage } from 'next';

const Page: NextPage = async () => {
  const images = await client.getList({
    endpoint: 'images',
    queries: { fields: ['image', 'title'] },
  });
  return (
    <div className="relative mx-auto overflow-x-auto py-6 px-4 bg-gray-100">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        #ccc 2px,
        #ccc 4px
      )`,
        }}
      ></div>

      <div className="m-0 p-0">
        <div className=" bg-gray-100">
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
    </div>
  );
};

export default Page;
