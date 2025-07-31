import type { NextPage } from 'next';
import Image from 'next/image';

import { client } from '@/lib/microcms';
import Card from '@/components/ui/Card';

const Page: NextPage = async () => {
  const goods = await client.getList({
    endpoint: 'goods',
  });

  return (
    <div className="flex flex-col items-center py-5">
      <h1 className="mb-5 text-3xl font-bold text-zinc-700">Goods</h1>
      <div className="flex max-w-6xl flex-wrap justify-center gap-6">
        {goods.contents.map((item) => (
          <Card
            key={item.id}
            className="h-80 w-52 flex-shrink-0 bg-zinc-50 text-zinc-700"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-full flex-col items-center"
            >
              {item.image ? (
                <Image
                  src={item.image.url}
                  alt={item.name}
                  width={item.image.width}
                  height={item.image.height}
                  className="h-2/3 rounded-lg object-cover"
                />
              ) : (
                <div className="mb-4 flex h-2/3 items-center justify-center">
                  <span className="text-zinc-700">No Image</span>
                </div>
              )}
              <div className="flex h-1/3 flex-col justify-center">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="pt-2 text-zinc-700">{item.description}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
