import PageFrame from '@/components/layout/PageFrame';

type Props = {
  children: React.ReactNode;
};

const ContactLayout: React.FC<Props> = ({ children }) => {
  return <PageFrame>{children}</PageFrame>;
};

export default ContactLayout;
