import { cn } from '@/lib/utils';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageFrame: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="m-0 flex h-full min-h-screen w-full flex-col p-0">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className={cn('w-full flex-1', className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageFrame;
