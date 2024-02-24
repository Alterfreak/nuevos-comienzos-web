import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;

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

const MainTitle = styled.h1`
  max-width: 1440px;
  width: 100%;
  position: relative;
  z-index: 1;
  font-family: Poppins;
  font-weight: 900;
  font-size: 5rem;
  display: block;
  letter-spacing: -2px;
  line-height: 1;
  color: var(--text-primary);
  margin: 0;

  @media screen and (max-width: 425px) {
    font-size: 3.9rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.9rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  max-width: 1440px;
  width: 100%;
  position: relative;
  z-index: 1;
  font-family: Outfit;
  margin: 0;
  font-weight: normal;
  display: block;
  line-height: 1;
  color: var(--text-primary);

  @media screen and (max-width: 375px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  max-height: 940px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-bottom: 1px solid var(--border-primary);

  @media screen and (max-width: 425px) {
    height: 60vh;
  }
`;

const SectionHero: React.FC = () => {
  return (
    <HeroSection>
      <Wrapper>
        <MainTitle>Bienvenido a un lugar de nuevos comienzos</MainTitle>
        <Subtitle>Iglesia del Nazareno en Barranquilla</Subtitle>
      </Wrapper>
    </HeroSection>
  );
};

export default SectionHero;
