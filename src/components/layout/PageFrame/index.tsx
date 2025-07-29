import Header from '@/components/ui/Header';

type Props = {
  children: React.ReactNode;
};

const PageFrame: React.FC<Props> = ({ children }) => {
  return (
    <div className="m-0 flex h-full w-full flex-col p-0">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
};

export default PageFrame;
