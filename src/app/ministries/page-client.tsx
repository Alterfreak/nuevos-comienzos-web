'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import PageLayout from '../../components/pageLayout';
import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import SectionDescription from '../../components/sectionDescription';
import Button from '../../components/button';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  background: var(--background-main);

  & > span {
    max-width: 400px;
    width: 100%;
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

const MinistriesPageClient: React.FC = () => {
  return (
    <PageLayout title="Nuestros Ministerios">
      <StyledSection>
        <Wrapper>
          <TextWrapper>
            <SectionTitle subtitle="JNI" title="Juventud Nazarena Internacional" />
            <SectionDescription>
              Trabajamos con un enfoque en liderazgo generacional, entrenando y discipulando a nuestros jóvenes. Siendo
              fieles a la palabra de Dios pero también sensibles a las nuevas generaciones.
              <br />
            </SectionDescription>

            <Button hoverStyle="primary" label="Involucrarme" />
          </TextWrapper>
          <LogoWrapper>
            <Image
              src="/images/jni-logo.webp"
              alt="Logo de JNI"
              width={400}
              height={190}
              sizes="(max-width: 767px) 80vw, 400px"
              style={{ width: '100%', height: 'auto' }}
            />
          </LogoWrapper>
        </Wrapper>
      </StyledSection>
      <StyledSection transparent>
        <Wrapper>
          <LogoWrapper>
            <Image
              src="/images/mnc-logo.webp"
              alt="Logo de MNC"
              width={400}
              height={413}
              sizes="(max-width: 767px) 80vw, 400px"
              style={{ width: '100%', height: 'auto' }}
            />
          </LogoWrapper>
          <TextWrapper>
            <SectionTitle subtitle="MNC" title="Ministerio Nazareno de Compasión" />
            <SectionDescription>
              Siguiendo el ejemplo de nuestro Señor Jesús, buscamos impactar nuestra comunidad barranquillera a través
              de actos de compasión.
              <br />
              Apoyamos el comedor infantil de la Iglesia del Nazareno - Bienvenido a casa, pero también contamos con
              algunos proyectos de compasión con talleres de oficios, visita a hospitales, y recaudamos mensualmente un
              fondo de alimentos para bendecir a otros.
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
              Uno de los valores esenciales de nuestra iglesia es que somos un pueblo misional. A través de este
              ministerio Nosotros fomentamos las misiones, enseñamos a escuchar el llamado y preparamos el camino para
              probar lo que es servir al Señor a través de misiones.
              <br />
            </SectionDescription>

            <Button hoverStyle="primary" label="¡Quiero saber más!" />
          </TextWrapper>
          <LogoWrapper>
            <Image
              src="/images/mni-logo.webp"
              alt="Logo de MNI"
              width={400}
              height={117}
              sizes="(max-width: 767px) 80vw, 400px"
              style={{ width: '100%', height: 'auto' }}
            />
          </LogoWrapper>
        </Wrapper>
      </StyledSection>
      <StyledSection transparent>
        <Wrapper>
          <LogoWrapper>
            <Image
              src="/images/nazakids-logo.webp"
              alt="Logo de NazaKids"
              width={400}
              height={225}
              sizes="(max-width: 767px) 80vw, 400px"
              style={{ width: '100%', height: 'auto' }}
            />
          </LogoWrapper>
          <TextWrapper>
            <SectionTitle subtitle="Niños" title="NazaKids" />
            <SectionDescription>
              Al igual que trabajamos discipulando y entrenando jóvenes, también no enfocamos en los niños para
              prepararlos para pasar a JNI. Nos enfocamos no solo en tener un tiempo divertido y cuidarlos, sino que
              también buscamos que ellos crezcan espiritualmente y en conocimiento de la palabra.
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
              A través de este ministerio proveemos plataformas de discipulado y educación teológica. Nos enfocamos en
              preparar no solo personas que sirvan a Dios o que ayuden en la iglesia, si no que preparamos ministros del
              evangelio capacitados para la obra.
              <br />
            </SectionDescription>

            <Button hoverStyle="primary" label="¡Quiero aprender!" />
          </TextWrapper>
          <LogoWrapper>
            <Image
              src="/images/dni-logo.webp"
              alt="Logo de DNI"
              width={400}
              height={234}
              sizes="(max-width: 767px) 80vw, 400px"
              style={{ width: '100%', height: 'auto' }}
            />
          </LogoWrapper>
        </Wrapper>
      </StyledSection>
    </PageLayout>
  );
};

export default MinistriesPageClient;
