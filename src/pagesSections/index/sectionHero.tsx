import React from 'react';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';
import SectionTitle from '../../components/sectionTitle';

const MainTitle = styled(SectionTitle)`
  max-width: 1440px;
  width: 100%;

  h1 {
    position: relative;
    z-index: 1;
    color: white;
    font-family: Helvetica Now Text;
    font-weight: 900;
    font-size: 4rem;
    display: block;
    margin: auto;
    text-transform: uppercase;
    letter-spacing: -2px;

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
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  max-height: 940px;
  background-image: url('/images/bg.mp4');
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222324;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    background: black;
    opacity: 0.4;
  }
`;

/* const Video = styled.video`
  position: absolute;
  width: calc(100vw - 20px);
  object-fit: cover;
  height: 100vh;
`; */

const SectionHero: React.FC = () => {
  return (
    <HeroSection>
      <MainTitle
        center
        tag="h1"
        subtitle="Bienvenido a"
        title={
          <>
            Un lugar de nuevos comienzos<span style={{ color: 'var(--contrast)' }}>...</span>
          </>
        }
        light
      />
      <StaticImage
        src="../../images/bg-thumbnail.webp"
        alt="A description"
        placeholder="none"
        layout="constrained"
        style={{ height: '100vh', width: 'calc(100vw - 20px)', position: 'absolute' }}
      />
      {/* <Video autoPlay loop muted poster="/images/bg-thumbnail.webp">
        <source src="/images/bg.mp4" type="video/mp4" />
      </Video> */}
      {/* <StaticImage src="../images/nuevos-comienzos-blanco.webp" alt="A description" placeholder="none" layout="constrained" style={{ width: '50%' }} /> */}
    </HeroSection>
  );
};

export default SectionHero;
