import pageData from '../../data/pageData';
import { createMetadata } from '../../lib/seo';
import AboutPageClient from './page-client';

export const metadata = createMetadata({
  title: pageData.about.title,
  description: pageData.about.description,
  path: '/about',
});

const AboutPage = () => {
  return <AboutPageClient />;
};

export default AboutPage;
