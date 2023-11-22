import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/pageLayout';
import Section from '../components/section';
import SectionTitle from '../components/sectionTitle';
import CustomHead from '../components/customHead';
import pageData from '../data/pageData';
import SectionDescription from '../components/sectionDescription';
import Button from '../components/button';

const LogoWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    max-width: 400px;
  }

  @media screen and (max-width: 767px) {
    order: -1;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  z-index: 10;
  position: relative;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const AboutPage: React.FC<PageProps> = () => {
  return (
    <PageLayout title="Nuestros Ministerios">
      <Section>
        <Wrapper>
          <div>
            <SectionTitle subtitle="JNI" title="Juventud Nazarena Internacional" />
            <SectionDescription>
              Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de Dios y tener conversaciones
              significativas.
              <br />
              Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
            </SectionDescription>

            <Button hoverStyle="primary" label="Involucrarme" />
          </div>
          <LogoWrapper>
            <StaticImage src="../images/jni-logo.png" alt="Logo de JNI" placeholder="none" />
          </LogoWrapper>
        </Wrapper>
      </Section>
      <Section transparent>
        <Wrapper>
          <LogoWrapper>
            <StaticImage src="../images/mnc-logo.png" alt="Logo de MNC" placeholder="none" />
          </LogoWrapper>
          <div>
            <SectionTitle subtitle="MNC" title="Ministerio Nazareno de Compasión" light />
            <SectionDescription light>
              Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de Dios y tener conversaciones
              significativas.
              <br />
              Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
            </SectionDescription>

            <Button hoverStyle="primary" label="Involucrarme" />
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div>
            <SectionTitle subtitle="MNI" title="Misiones Nazarenas Internacionales" />
            <SectionDescription>
              Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de Dios y tener conversaciones
              significativas.
              <br />
              Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
            </SectionDescription>

            <Button hoverStyle="secondary" label="Involucrarme" />
          </div>
          <LogoWrapper>
            <StaticImage src="../images/mni-logo.png" alt="Logo de MNI" placeholder="none" />
          </LogoWrapper>
        </Wrapper>
      </Section>
      <Section transparent>
        <Wrapper>
          <LogoWrapper>
            <StaticImage src="../images/nazakids-logo.png" alt="Logo de NazaKids" placeholder="none" />
          </LogoWrapper>
          <div>
            <SectionTitle subtitle="Niños" title="NazaKids" light />
            <SectionDescription light>
              Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de Dios y tener conversaciones
              significativas.
              <br />
              Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
            </SectionDescription>

            <Button hoverStyle="secondary" label="Involucrarme" />
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div>
            <SectionTitle subtitle="DNI" title="Discipulado Nazareno Internacional" />
            <SectionDescription>
              Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de Dios y tener conversaciones
              significativas.
              <br />
              Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
            </SectionDescription>

            <Button hoverStyle="primary" label="Involucrarme" />
          </div>
          <LogoWrapper>
            <StaticImage src="../images/dni-logo.png" alt="Logo de DNI" placeholder="none" />
          </LogoWrapper>
        </Wrapper>
      </Section>
    </PageLayout>
  );
};

export const Head = () => <CustomHead title={pageData.ministries.title} description={pageData.ministries.description} />;

export default AboutPage;
