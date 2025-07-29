import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
