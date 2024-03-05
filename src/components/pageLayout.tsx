import * as React from 'react';
import styled from 'styled-components';
import Layout from './layout';

const HeroSection = styled.section`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-position: 0 -60px;
  border-bottom: 1px solid var(--border-primary);
  padding-top: 110px;

  @media screen and (max-width: 425px) {
    padding-top: 80px;
  }
`;

const Title = styled.h1`
  background: white;
  color: var(--text-primary);
  font-family: Poppins;
  font-weight: 900;
  font-size: 5rem;
  z-index: 2;

  @media screen and (max-width: 1440px) {
    padding: 0 36px;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    padding: 0 36px;
  }

  @media screen and (max-width: 425px) {
    font-size: 2.8rem;
    padding: 0 24px;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.3rem;
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
