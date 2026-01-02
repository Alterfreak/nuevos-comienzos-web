import type { Metadata } from 'next';

import pageData from '../../data/pageData';
import ArticlesPageClient from './page-client';

export const metadata: Metadata = {
  title: pageData.articles.title,
  description: pageData.articles.description,
};

const ArticlesPage = () => {
  return <ArticlesPageClient />;
};

export default ArticlesPage;
