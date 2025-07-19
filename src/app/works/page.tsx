import AllPhotoWorks from '@/components/AllPhotoWorks';
import PhotoWorks from '@/components/PhotoWorks';
import { client } from '@/lib/microcms';
import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = async () => {
  const images = await client.getList({
    endpoint: 'images',
    queries: { fields: ['image', 'title'] },
  });

  return (
    <div className="m-0 p-0">
      <main className=" min-h-screen flex flex-col items-center justify-center bg-gray-600 py-12">
        <div className="text-8xl font-bold mb-9 text-white space-x-1">
          <span className="relative top-0">P</span>
          <span className="relative top-2">r</span>
          <span className="relative top-4">o</span>
          <span className="relative top-2">d</span>
          <span className="relative top-0">u</span>
          <span className="relative top-2">c</span>
          <span className="relative top-4">t</span>
          <span className="relative top-2">i</span>
          <span className="relative top-0">o</span>
          <span className="relative top-2">n</span>
          <span className="relative top-4">M</span>
          <span className="relative top-2">E</span>
          <span className="relative top-0">T</span>
        </div>
        <PhotoWorks
          images={images.contents.map((data) => ({
            src: data.image.url,
            alt: data.title,
            width: data.image.width,
            height: data.image.height,
          }))}
        />
        <a
          href="#next-section"
          className="block text-center mt-4 animate-bounce "
        >
          <span className="text-4xl">↓</span>
        </a>
      </main>

      <div className="">
        <section id="next-section" className="h-screen bg-gray-600">
          <div className="flex flex-col items-center justify-center ">
            <Link
              href="/"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              <img
                src="MET-mono.png"
                alt="logo"
                className="h-20 w-auto mt-10"
              />
            </Link>
          </div>
          <AllPhotoWorks
            images={images.contents.map((data) => ({
              src: data.image.url,
              alt: data.title,
              width: data.image.width,
              height: data.image.height,
            }))}
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
