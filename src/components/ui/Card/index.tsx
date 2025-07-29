import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
