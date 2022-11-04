import { HomeComponent } from '@/page-components/Home';
import MainTemplate from '@/templates/MainTemplate';

const Index = () => {
  return (
    <MainTemplate metaTitle="Home">
      <HomeComponent />
    </MainTemplate>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      isLoginRedirect: true,
    },
  };
};

export default Index;
