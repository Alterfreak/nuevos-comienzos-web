import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ hoverStyle: 'primary' | 'secondary' }>`
  color: #fff;
  background: var(--contrast);
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
    ${({ hoverStyle }) => {
      if (hoverStyle === 'secondary') {
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
};

const Button: React.FC<Props> = ({ label, hoverStyle = 'primary' }) => {
  return <StyledButton hoverStyle={hoverStyle}>{label}</StyledButton>;
};

export default Button;
