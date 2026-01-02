'use client';

import React from 'react';
import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section<{
  $fullWidth?: boolean;
  $transparent?: boolean;
}>`
  ${({ $transparent }) =>
    !$transparent &&
    css`
      background: white;
    `}

  justify-content: center;
  box-sizing: border-box;
  padding: 64px 0;

  ${({ $fullWidth }) =>
    !$fullWidth &&
    css`
      padding: 64px 24px;
      display: flex;
    `}

  @media screen and (max-width: 1319px) {
    ${({ $fullWidth }) =>
      !$fullWidth &&
      css`
        padding: 64px 24px;
      `}
  }
`;

const Content = styled.section`
  max-width: 1320px;
  width: 100%;
  box-sizing: border-box;
`;

type Props = {
  fullWidth?: boolean;
  transparent?: boolean;
  className?: string;
};

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  fullWidth = false,
  transparent = false,
}) => {
  if (fullWidth) {
    return (
      <SectionWrapper $transparent={transparent} $fullWidth className={className}>
        {children}
      </SectionWrapper>
    );
  }
  return (
    <SectionWrapper $transparent={transparent} className={className}>
      <Content>{children}</Content>
    </SectionWrapper>
  );
};

export default Section;
