import * as React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ center: boolean; light?: boolean }>`
  ${({ light }) =>
    light &&
    css`
      color: #e1e1e1;
    `}
  ${({ center }) =>
    center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

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
    content: '';
    width: 10px;
    display: block;
    position: absolute;
    height: 2px;
    background-color: var(--contrast);
    top: 8px;
    left: 0;
  }

  &::after {
    content: '';
    width: 10px;
    display: block;
    position: absolute;
    height: 2px;
    background-color: var(--contrast);
    top: 8px;
    right: -15px;
  }
`;

const Title = styled.h3<{ center?: boolean }>`
  font-family: Helvetica Now Text;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.25;
  margin-bottom: 50px;
  margin-top: 0;

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

const SectionTitle: React.FC<Props> = ({ title, subtitle, center = false, light = false }) => {
  return (
    <Wrapper center={center} light={light}>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default SectionTitle;
