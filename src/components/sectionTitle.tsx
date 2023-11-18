import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const SubTitle = styled.span`
  position: relative;
  font-family: Outfit;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
  padding-left: 15px;

  &::before {
    content: "";
    width: 10px;
    display: block;
    position: absolute;
    height: 2px;
    background-color: var(--contrast);
    top: 8px;
    left: 0;
  }

  &::after {
    content: "";
    width: 10px;
    display: block;
    position: absolute;
    height: 2px;
    background-color: var(--contrast);
    top: 8px;
    right: -15px;
  }
`;

const Title = styled.h3`
  font-family: Helvetica Now Text;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.25;
  margin-bottom: 50px;
  margin-top: 0;
`;

const SectionTitle: React.FC<React.PropsWithChildren<{ subtitle?: string }>> = ({ children, subtitle }) => {
  return (
    <Wrapper>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Title>{children}</Title>
    </Wrapper>
  );
};

export default SectionTitle;
