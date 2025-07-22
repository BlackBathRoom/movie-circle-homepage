import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MovieWorks from '@/components/MovieWorks';
import { client } from '@/lib/microcms';
import type { NextPage } from 'next';

const Page: NextPage = async () => {
  const movie = await client
    .getList({
      endpoint: 'movies',
      queries: { fields: ['url', 'title', 'startAt'] },
    })
    .then((res) => res.contents[0]);

  return (
    <div className="m-0 p-0">
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-600 py-12 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-9 text-white text-center">
          ProductionMET
        </h1>
        <section className="relative w-full h-screen overflow-hidden ">
          <MovieWorks
            movie={{
              url: movie.url,
              title: movie.title,
              startAt: movie.startAt,
            }}
            className="bg-black rounded-lg shadow-xl"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
