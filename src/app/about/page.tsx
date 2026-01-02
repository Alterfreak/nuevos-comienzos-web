import type { Metadata } from 'next';

import pageData from '../../data/pageData';
import AboutPageClient from './page-client';

export const metadata: Metadata = {
  title: pageData.about.title,
  description: pageData.about.description,
};

const AboutPage = () => {
  return <AboutPageClient />;
};

export default AboutPage;
