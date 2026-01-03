import pageData from '../../data/pageData';
import { createMetadata } from '../../lib/seo';
import MinistriesPageClient from './page-client';

export const metadata = createMetadata({
  title: pageData.ministries.title,
  description: pageData.ministries.description,
  path: '/ministries',
});

const MinistriesPage = () => {
  return <MinistriesPageClient />;
};

export default MinistriesPage;
