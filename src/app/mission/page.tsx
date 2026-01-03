import pageData from '../../data/pageData';
import { createMetadata } from '../../lib/seo';
import MissionPageClient from './page-client';

export const metadata = createMetadata({
  title: pageData.mission.title,
  description: pageData.mission.description,
  path: '/mission',
});

const MissionPage = () => {
  return <MissionPageClient />;
};

export default MissionPage;
