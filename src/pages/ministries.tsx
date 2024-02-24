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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  background: var(--background-main);

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
  z-index: 10;
  position: relative;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const TextWrapper = styled.div`
  padding: 48px;
  width: auto;
`;

const StyledSection = styled(Section)`
  & > section {
    width: auto;
  }
`;

const AboutPage: React.FC<PageProps> = () => {
  return (
    <PageLayout title="Nuestros Ministerios">
      <StyledSection>
        <Wrapper>
          <TextWrapper>
            <SectionTitle subtitle="JNI" title="Juventud Nazarena Internacional" />
            <SectionDescription>
              Trabajamos con un enfoque en liderazgo generacional, entrenando y discipulando a nuestros jóvenes. Siendo fieles a la palabra de Dios pero también
              sensibles a las nuevas generaciones.
              <br />
            </SectionDescription>

            <Button hoverStyle="primary" label="Involucrarme" />
          </TextWrapper>
          <LogoWrapper>
            <StaticImage src="../images/jni-logo.webp" alt="Logo de JNI" placeholder="none" />
          </LogoWrapper>
        </Wrapper>
      </StyledSection>
      <StyledSection transparent>
        <Wrapper>
          <LogoWrapper>
            <StaticImage src="../images/mnc-logo.webp" alt="Logo de MNC" placeholder="none" />
          </LogoWrapper>
          <TextWrapper>
            <SectionTitle subtitle="MNC" title="Ministerio Nazareno de Compasión" />
            <SectionDescription>
              Siguiendo el ejemplo de nuestro Señor Jesús, buscamos impactar nuestra comunidad barranquillera a través de actos de compasión.
              <br />
              Apoyamos el comedor infantil de la Iglesia del Nazareno - Bienvenido a casa, pero también contamos con algunos proyectos de compasión con talleres
              de oficios, visita a hospitales, y recaudamos mensualmente un fondo de alimentos para bendecir a otros.
              <br />
              ¡Te invitamos a que puedas hacer tu contribución a este ministerio!
            </SectionDescription>

            <Button hoverStyle="primary" label="¡Quiero ayudar!" />
          </TextWrapper>
        </Wrapper>
      </StyledSection>
      <StyledSection>
        <Wrapper>
          <TextWrapper>
            <SectionTitle subtitle="MNI" title="Misiones Nazarenas Internacionales" />
            <SectionDescription>
              Uno de los valores esenciales de nuestra iglesia es que somos un pueblo misional. A través de este ministerio Nosotros fomentamos las misiones,
              enseñamos a escuchar el llamado y preparamos el camino para probar lo que es servir al Señor a través de misiones.
              <br />
            </SectionDescription>

            <Button hoverStyle="primary" label="¡Quiero saber más!" />
          </TextWrapper>
          <LogoWrapper>
            <StaticImage src="../images/mni-logo.webp" alt="Logo de MNI" placeholder="none" />
          </LogoWrapper>
        </Wrapper>
      </StyledSection>
      <StyledSection transparent>
        <Wrapper>
          <LogoWrapper>
            <StaticImage src="../images/nazakids-logo.webp" alt="Logo de NazaKids" placeholder="none" />
          </LogoWrapper>
          <TextWrapper>
            <SectionTitle subtitle="Niños" title="NazaKids" />
            <SectionDescription>
              Al igual que trabajamos discipulando y entrenando jóvenes, también no enfocamos en los niños para prepararlos para pasar a JNI. Nos enfocamos no
              solo en tener un tiempo divertido y cuidarlos, sino que también buscamos que ellos crezcan espiritualmente y en conocimiento de la palabra.
              <br />
            </SectionDescription>

            <Button hoverStyle="primary" label="¡Quiero saber más!" />
          </TextWrapper>
        </Wrapper>
      </StyledSection>
      <StyledSection>
        <Wrapper>
          <TextWrapper>
            <SectionTitle subtitle="DNI" title="Discipulado Nazareno Internacional" />
            <SectionDescription>
              A través de este ministerio proveemos plataformas de discipulado y educación teológica. Nos enfocamos en preparar no solo personas que sirvan a
              Dios o que ayuden en la iglesia, si no que preparamos ministros del evangelio capacitados para la obra.
              <br />
            </SectionDescription>

            <Button hoverStyle="primary" label="¡Quiero aprender!" />
          </TextWrapper>
          <LogoWrapper>
            <StaticImage src="../images/dni-logo.webp" alt="Logo de DNI" placeholder="none" />
          </LogoWrapper>
        </Wrapper>
      </StyledSection>
    </PageLayout>
  );
};

export const Head = () => <CustomHead title={pageData.ministries.title} description={pageData.ministries.description} />;

export default AboutPage;
