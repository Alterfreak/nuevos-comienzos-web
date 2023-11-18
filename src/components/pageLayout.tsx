import * as React from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import Footer from "./footer";
import Layout from "./layout";

const HeroSection = styled.section`
  height: 624px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: Helvetica Now Text;
  font-weight: 700;
  font-size: 62px;
  color: white;
  text-transform: uppercase;
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
