import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageTitle: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        'mb-4 text-center text-3xl font-bold text-zinc-700',
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default PageTitle;
