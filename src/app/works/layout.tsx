import Header from '@/components/ui/Header';

type Props = {
  children: React.ReactNode;
};

const WorksLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default WorksLayout;
