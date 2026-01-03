'use client';

import * as React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ $center: boolean; $light?: boolean }>`
  ${({ $light }) =>
    $light &&
    css`
      color: #e1e1e1;
    `}
  ${({ $center }) =>
    $center &&
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
    background-color: var(--color-primary);
    top: 8px;
    left: 0;
  }

  &::after {
    content: '';
    width: 10px;
    display: block;
    position: absolute;
    height: 2px;
    background-color: var(--color-primary);
    top: 8px;
    right: -15px;
  }
`;

const Title = styled.h3<{ $center?: boolean }>`
  font-family: Poppins;
  font-size: 3.6rem;
  font-weight: 900;
  line-height: 1.25;
  margin-bottom: 50px;
  margin-top: 0;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.9rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 2.4rem;
  }

  ${({ $center }) =>
    $center &&
    css`
      text-align: center;

      @media screen and (max-width: 424px) {
        padding: 0 32px;
      }
    `}
`;

type Props = {
  title: string | JSX.Element;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const SectionTitle: React.FC<Props> = ({ tag = 'h2', className, title, subtitle, center = false, light = false }) => {
  return (
    <Wrapper className={className} $center={center} $light={light}>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Title as={tag} $center={center}>
        {title}
      </Title>
    </Wrapper>
  );
};

export default SectionTitle;
