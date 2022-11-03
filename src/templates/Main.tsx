import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Fragment } from 'react';

import Footer from '@/components/Footer';
import Meta from '@/components/Meta';
import Navbar from '@/components/Navbar';
import appConfig from '@/utils/appConfig';

type IMainTemplateProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const MainTemplate = ({ title, description, children }: IMainTemplateProps) => (
  <Fragment>
    <Meta title={title || appConfig.title} description={description || appConfig.description} />
    <Navbar />
    <Box as="main">{children}</Box>
    <Footer />
  </Fragment>
);

export default MainTemplate;
