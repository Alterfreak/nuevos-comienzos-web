import type { Metadata } from 'next';

import pageData from '../data/pageData';
import PageClient from './page-client';

export const metadata: Metadata = {
  title: pageData.index.title,
  description: pageData.index.description,
};

const Page = () => {
  return <PageClient />;
};

export default Page;
