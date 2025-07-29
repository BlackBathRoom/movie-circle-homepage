import Header from '@/components/ui/Header';

type Props = {
  children: React.ReactNode;
};

const PageFrame: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full m-0 p-0 flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
};

export default PageFrame;
