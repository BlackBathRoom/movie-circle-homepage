import type { NextPage } from 'next';

import { client } from '@/lib/microcms';
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';

const Page: NextPage = async () => {
  const images = await client.getList({
    endpoint: 'images',
    queries: { fields: ['image', 'title'] },
  });
  const members = await client.getList({
    endpoint: 'members',
    queries: { fields: ['name', 'description', 'role'] },
  });
  const biographies = await client.getList({
    endpoint: 'biographies',
    queries: { fields: ['title', 'description', 'dateAt'] },
  });

  return (
    <div className="m-0 p-0">
      <div className="">
        <Slider
          images={images.contents.map((data) => ({
            src: data.image.url,
            alt: data.title,
            width: data.image.width,
            height: data.image.height,
          }))}
        />
      </div>
      <div className="px-4">
        <h1 className="mb-4 text-center text-3xl font-bold text-zinc-700">
          MEMBER
        </h1>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {members.contents.map((member) => (
            <Card
              key={member.name}
              className="rounded-lg bg-zinc-50 p-4 text-zinc-700 shadow"
            >
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="">{member.role}</p>
              <p className="">{member.description}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="px-4">
        <h1 className="mb-4 text-center text-3xl font-bold text-zinc-700">
          BIOGRAPHY
        </h1>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {biographies.contents.map((bio) => (
            <Card
              key={bio.title}
              className="rounded-lg bg-zinc-50 p-4 text-zinc-700 shadow"
            >
              <h2 className="text-xl font-semibold">{bio.title}</h2>
              <p className="">{bio.description}</p>
              <p className="">{bio.dateAt}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
