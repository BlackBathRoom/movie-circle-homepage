import PageFrame from '@/components/layout/PageFrame';

type Props = {
  children: React.ReactNode;
};

const AboutLayout: React.FC<Props> = ({ children }) => {
  return <PageFrame>{children}</PageFrame>;
};

export default AboutLayout;
