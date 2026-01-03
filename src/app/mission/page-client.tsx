'use client';

import React from 'react';
import styled from 'styled-components';

import PageLayout from '../../components/pageLayout';
import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import SectionDescription from '../../components/sectionDescription';

const MissionText = styled(SectionDescription)`
  text-align: center;
  max-width: 820px;
  margin: 0 auto 18px;
`;

const ValuesGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.04);
`;

const ValueTitle = styled.h3`
  margin: 0 0 10px;
  font-family: Poppins;
  font-weight: 800;
  font-size: 20px;
  color: var(--text-primary);
`;

const ValueText = styled.p`
  margin: 0;
  font-family: Outfit;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #3b3b3b;
`;

const values = [
  {
    title: 'Somos un pueblo cristiano',
    description: 'Jesús es el centro de nuestra fe, nuestro mensaje y nuestro modelo.',
  },
  {
    title: 'Somos un pueblo santo',
    description: 'Creemos en una vida transformada por el Espíritu, reflejando el carácter de Cristo.',
  },
  {
    title: 'Somos un pueblo misional',
    description: 'Somos enviados a servir y compartir el evangelio con compasión y esperanza.',
  },
];

const MissionPageClient: React.FC = () => {
  return (
    <PageLayout title="Nuestra misión">
      <Section>
        <SectionTitle center subtitle="Nuestra" title="Misión" />
        <MissionText>Nuestra misión es hacer discípulos semejantes a Cristo en Barranquilla y más allá.</MissionText>
        <MissionText>
          Dios continúa llamando a personas ordinarias para hacer cosas extraordinarias cuando vivimos el evangelio con
          fe y compasión.
        </MissionText>
      </Section>
      <Section>
        <SectionTitle center subtitle="Nuestros" title="Valores" />
        <ValuesGrid>
          {values.map(value => (
            <ValueCard key={value.title}>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueText>{value.description}</ValueText>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>
    </PageLayout>
  );
};

export default MissionPageClient;
