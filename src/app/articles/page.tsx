import pageData from '../../data/pageData';
import { createMetadata } from '../../lib/seo';
import ArticlesPageClient from './page-client';

export const metadata = createMetadata({
  title: pageData.articles.title,
  description: pageData.articles.description,
  path: '/articles',
});

const ArticlesPage = () => {
  return <ArticlesPageClient />;
};

export default ArticlesPage;
