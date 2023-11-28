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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SectionHero />
      <SectionActivities />
      <SectionGroups />
      <Section>
        <GridRow $columns={3}>
          <Item>
            <StaticImage src="../images/jni-logo.webp" alt="A description" placeholder="none" layout="fixed" height={95} />
            <p>
              Creemos que los jóvenes son importantes y tienen un gran potencial para impactar el mundo.
              <br />
              Creamos un lugar seguro donde los jóvenes puedan crecer en su fe, hacer amigos y descubrir su propósito en la vida.
            </p>
            <Button label="Más info..." />
          </Item>

          <Item>
            <StaticImage src="../images/mni-logo.webp" alt="A description" placeholder="none" layout="constrained" style={{ width: '50%' }} />
            <p>
              Debemos llevar el mensaje de Jesús a todo el mundo y enseñar a las personas sobre el amor de Dios. Por eso, a través de este ministerio para
              involucrar a nuestra comunidad en las misiones.
            </p>
            <Button label="Más info..." />
          </Item>

          <Item>
            <StaticImage src="../images/dni-logo.webp" alt="A description" placeholder="none" layout="fixed" height={95} />
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
