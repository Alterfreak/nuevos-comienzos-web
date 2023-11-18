import * as React from "react";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 64px 0;
  background: white;
  display: flex;
  justify-content: center;
`;

const Content = styled.section`
  max-width: 1320px;
  width: 100%;
`;

const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SectionWrapper>
      <Content>{children}</Content>
    </SectionWrapper>
  );
};

export default Section;
