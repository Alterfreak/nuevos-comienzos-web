'use client';

import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';
import Section from '../components/section';
import SectionGroups from '../pagesSections/index/sectionGroups';
import SectionActivities from '../pagesSections/index/sectionActivities';
import SectionHero from '../pagesSections/index/sectionHero';

const GridRow = styled.div<{ $columns: number }>`
  display: grid;
  gap: 24px;

  ${({ $columns }) => css`
    grid-template-columns: repeat(${$columns}, 1fr);
  `}

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-rows: 95px 1fr auto;
  align-items: center;
  justify-items: center;
  gap: 16px;

  p {
    text-align: center;
    font-family: 'Outfit';
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #666666;
    margin-bottom: 25px;
    min-height: 168px;

    @media screen and (max-width: 1150px) {
      min-height: auto;
    }
  }
`;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SectionHero />
      <SectionActivities />
      <SectionGroups />
      <Section>
        <GridRow $columns={3}>
          <Item>
            <Image src="/images/jni-logo.webp" alt="Logo de JNI" width={200} height={95} />
            <p>
              Creemos que los jóvenes son importantes y tienen un gran potencial para impactar el mundo.
              <br />
              Creamos un lugar seguro donde los jóvenes puedan crecer en su fe, hacer amigos y descubrir su propósito en
              la vida.
            </p>
          </Item>

          <Item>
            <Image
              src="/images/mni-logo.webp"
              alt="Logo de MNI"
              width={342}
              height={100}
              style={{ width: '50%', height: 'auto' }}
            />
            <p>
              Debemos llevar el mensaje de Jesús a todo el mundo y enseñar a las personas sobre el amor de Dios. Por
              eso, a través de este ministerio para involucrar a nuestra comunidad en las misiones.
            </p>
          </Item>

          <Item>
            <Image src="/images/dni-logo.webp" alt="Logo de DNI" width={162} height={95} />
            <p>
              Creemos que el discipulado es esencial para fortalecer nuestra fe y desarrollar una relación más profunda
              con Dios.
              <br />
              Por eso brindamos apoyo, recursos y oportunidades de crecimiento para que los creyentes puedan profundizar
              en su vida espiritual.
            </p>
          </Item>
        </GridRow>
      </Section>
    </Layout>
  );
};

export default IndexPage;
