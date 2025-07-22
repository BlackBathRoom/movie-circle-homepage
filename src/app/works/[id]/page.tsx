import { client } from '@/lib/microcms';
import type { NextPage } from 'next';
const Page: NextPage = async () => {
  const movie = await client
    .getList({
      endpoint: 'movies',
      queries: { fields: ['url', 'title', 'startAt'] },
    })
    .then((res) => res.contents[0]);
};

export default Page;
