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
      <h1 className="text-3xl font-bold mb-5">Goods</h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {goods.contents.map((item) => (
          <Card key={item.id} className="w-52 h-80 flex-shrink-0 bg-slate-100">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-full h-full"
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
                <div className="h-2/3 bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <div className="flex flex-col h-1/3 justify-center">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 pt-2">{item.description}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
