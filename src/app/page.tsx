import pageData from '../data/pageData';
import { createMetadata } from '../lib/seo';
import PageClient from './page-client';

export const dynamic = 'force-static';

export const metadata = createMetadata({
  title: pageData.index.title,
  description: pageData.index.description,
  path: '/',
});

const Page = () => {
  return <PageClient />;
};

export default Page;
