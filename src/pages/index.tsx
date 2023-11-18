import * as React from "react";
import type { PageProps, HeadFC } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Section from "../components/section";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 940px;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection>
        Hero Section
      </HeroSection>
      <Section>
          Hero Section
      </Section>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Nuevos Comienzos - IdN</title>;

export default IndexPage;
