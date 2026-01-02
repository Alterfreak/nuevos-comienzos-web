'use client';

import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ $hoverStyle: 'primary' | 'secondary' }>`
  color: #fff;
  background: var(--color-primary);
  border: 0;
  cursor: pointer;
  padding: 20px 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all linear 0.3s;

  &:hover {
    ${({ $hoverStyle }) => {
      if ($hoverStyle === 'secondary') {
        return css`
          background: white;
          color: #121212;
        `;
      }
      return css`
        background: #121212;
        color: white;
      `;
    }}
  }
`;

type Props = {
  label: string;
  hoverStyle?: 'primary' | 'secondary';
  type?: HTMLButtonElement['type'];
  className?: string;
};

const Button: React.FC<Props> = ({ label, type, hoverStyle = 'primary', className }) => {
  return (
    <StyledButton type={type} $hoverStyle={hoverStyle} className={className}>
      {label}
    </StyledButton>
  );
};

export default Button;
