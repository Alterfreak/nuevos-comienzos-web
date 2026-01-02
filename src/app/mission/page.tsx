import type { Metadata } from 'next';

import pageData from '../../data/pageData';
import MissionPageClient from './page-client';

export const metadata: Metadata = {
  title: pageData.articles.title,
  description: pageData.articles.description,
};

const MissionPage = () => {
  return <MissionPageClient />;
};

export default MissionPage;
