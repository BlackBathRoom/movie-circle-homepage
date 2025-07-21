import PhotoWorks from '@/components/PhotoWorks';
import type { NextPage } from 'next';

const Page: NextPage = async () => {
  return (
    <div className="m-0 p-0">
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-600 py-12 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-9 text-white text-center">
          ProductionMET
        </h1>

        <PhotoWorks
          videos={[
            { videoId: 'ZuRFp445jek', title: 'First Video' },
            { videoId: 's7WB14JssKA', title: 'Second Video' },
            { videoId: 'rQohLlei-Lg', title: 'Third Video' },
          ]}
        />
      </main>
    </div>
  );
};

export default Page;
