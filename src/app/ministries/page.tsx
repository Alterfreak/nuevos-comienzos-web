import type { Metadata } from 'next';

import pageData from '../../data/pageData';
import MinistriesPageClient from './page-client';

export const metadata: Metadata = {
  title: pageData.ministries.title,
  description: pageData.ministries.description,
};

const MinistriesPage = () => {
  return <MinistriesPageClient />;
};

export default MinistriesPage;
