import type { NextPage } from 'next';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

import Card from '@/components/ui/Card';
import { SNS_LINKS } from '@/constants';

const Page: NextPage = () => {
  return (
    <div className="flex min-h-full flex-col items-center gap-6 p-5 md:flex-row md:justify-center md:gap-10">
      <Card className="flex max-w-xs md:max-w-sm">
        <a
          href={SNS_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-col items-center"
        >
          <AiOutlineYoutube className="h-60 w-60 text-zinc-700 transition-colors hover:text-zinc-500 md:h-80 md:w-80" />
        </a>
      </Card>
      <Card className="flex max-w-xs">
        <a
          href={SNS_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-col items-center"
        >
          <AiOutlineInstagram className="h-60 w-60 text-zinc-700 transition-colors hover:text-zinc-500 md:h-80 md:w-80" />
        </a>
      </Card>
    </div>
  );
};

export default Page;
