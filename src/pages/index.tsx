import React from 'react';
import type { PageProps } from 'gatsby';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Section from '../components/section';
import Button from '../components/button';
import CustomHead from '../components/customHead';
import pageData from '../data/pageData';
import SectionGroups from '../pagesSections/index/sectionGroups';
import SectionActivities from '../pagesSections/index/sectionActivities';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 940px;
  background-image: url('/images/hero.png');
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    background: #222324;
    opacity: 0.9;
  }
`;

const GridRow = styled.div<{ columns: number }>`
  display: grid;
  gap: 24px;

  ${({ columns }) => css`
    grid-template-columns: repeat(${columns}, 1fr);
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

const MainTitle = styled.h1`
  position: relative;
  z-index: 1;
  color: white;
  font-family: Helvetica Now Text;
  font-weight: 800;
  font-size: 4rem;
  max-width: 1440px;
  width: 100%;
  display: block;
  text-align: left;
  margin: auto;

  @media screen and (max-width: 1440px) {
    padding: 0 36px;
  }

  @media screen and (max-width: 425px) {
    font-size: 3.2rem;
    padding: 0 36px;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.3rem;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection>
        <MainTitle>Nuevos Comienzos</MainTitle>
        {/* <StaticImage src="../images/nuevos-comienzos-blanco.png" alt="A description" placeholder="none" layout="constrained" style={{ width: '50%' }} /> */}
      </HeroSection>
      <SectionActivities />
      <SectionGroups />
      <Section>
        <GridRow columns={3}>
          <Item>
            <StaticImage src="../images/jni-logo.png" alt="A description" placeholder="none" layout="fixed" height={95} />
            <p>
              Creemos que los jóvenes son importantes y tienen un gran potencial para impactar el mundo.
              <br />
              Creamos un lugar seguro donde los jóvenes puedan crecer en su fe, hacer amigos y descubrir su propósito en la vida.
            </p>
            <Button label="Más info..." />
          </Item>

          <Item>
            <StaticImage src="../images/mni-logo.png" alt="A description" placeholder="none" layout="constrained" style={{ width: '50%' }} />
            <p>
              Debemos llevar el mensaje de Jesús a todo el mundo y enseñar a las personas sobre el amor de Dios. Por eso, a través de este ministerio para
              involucrar a nuestra comunidad en las misiones.
            </p>
            <Button label="Más info..." />
          </Item>

          <Item>
            <StaticImage src="../images/dni-logo.png" alt="A description" placeholder="none" layout="fixed" height={95} />
            <p>
              Creemos que el discipulado es esencial para fortalecer nuestra fe y desarrollar una relación más profunda con Dios.
              <br />
              Por eso brindamos apoyo, recursos y oportunidades de crecimiento para que los creyentes puedan profundizar en su vida espiritual.
            </p>
            <Button label="Más info..." />
          </Item>
        </GridRow>
      </Section>
    </Layout>
  );
};

export const Head = () => <CustomHead title={pageData.index.title} description={pageData.index.description} />;

export default IndexPage;
