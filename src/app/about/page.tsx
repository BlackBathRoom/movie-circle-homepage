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
  const microcms = await client.getList({
    endpoint: 'members',
    queries: { fields: ['name', 'description', 'role'] },
  });
  const biographies = await client.getList({
    endpoint: 'biographies',
    queries: { fields: ['title', 'description', 'dateAt'] },
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

      <div className="bg-white shadow-md gap-4">
        <h1 className="text-3xl font-bold mb-4 px-4">MEMBER</h1>
        <p className="text-gray-700"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {microcms.contents.map((member) => (
            <div key={member.name} className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md">
        <h1 className="text-3xl font-bold mb-4 px-4">BIOGRAPHY</h1>
        <p className="text-gray-700"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {biographies.contents.map((bio) => (
            <div key={bio.title} className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{bio.title}</h2>
              <p className="text-gray-600">{bio.description}</p>
              <p className="text-gray-500 mt-2">{bio.dateAt}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
