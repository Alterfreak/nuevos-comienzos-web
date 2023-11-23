import * as React from 'react';
import styled from 'styled-components';
import Layout from './layout';

const HeroSection = styled.section`
  height: 624px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/hero.png');
  position: relative;
  background-position: 0 -60px;

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

const Title = styled.h1`
  font-family: Helvetica Now Text;
  font-weight: 900;
  font-size: 62px;
  color: white;
  text-transform: uppercase;
  z-index: 2;

  @media screen and (max-width: 425px) {
    font-size: 2.5rem;
    padding: 0 32px;
  }
`;

const PageLayout: React.FC<React.PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <Layout>
      <HeroSection>
        <Title>{title}</Title>
      </HeroSection>
      {children}
    </Layout>
  );
};

export default PageLayout;
