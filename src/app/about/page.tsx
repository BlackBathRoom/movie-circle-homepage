import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import { client } from '@/lib/microcms';
import type { NextPage } from 'next';

const Page: NextPage = async () => {
  const images = await client.getList({
    endpoint: 'images',
    queries: { fields: ['image', 'title'] },
  });

  return (
    <div className="m-0 p-0">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Page;
