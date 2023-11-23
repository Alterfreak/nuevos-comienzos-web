import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';

import PageLayout from '../components/pageLayout';
import Section from '../components/section';
import SectionTitle from '../components/sectionTitle';
import CustomHead from '../components/customHead';
import pageData from '../data/pageData';
import InfoItem from '../components/infoItem';

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ArticleItem = styled(InfoItem)`
  position: relative;
  &::after {
    content: '';
    border-top: 1px solid rgba(150, 150, 150, 0.3);
    position: absolute;
    width: 100%;
    bottom: -20px;
  }
`;

const Mission: React.FC<PageProps> = () => {
  return (
    <PageLayout title="Nuestra misión">
      <Section>
        <SectionTitle center subtitle="Nuestra" title="Misión" />
        <p>Nuestra misión es hacer discípulos semejantes a Cristo en todas las naciones.</p>
        <p>Dios continúa llamando a personas ordinarias para hacer cosas extraordinarias.</p>
      </Section>
      <Section>
        <SectionTitle center subtitle="Nuestros" title="Valores" />
        <ArticlesList />
      </Section>
    </PageLayout>
  );
};

export const Head = () => <CustomHead title={pageData.articles.title} description={pageData.articles.description} />;

export default Mission;
