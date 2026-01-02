'use client';

import React from 'react';
import styled from 'styled-components';

import PageLayout from '../../components/pageLayout';
import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MissionPageClient: React.FC = () => {
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

export default MissionPageClient;
