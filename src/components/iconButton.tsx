import * as React from 'react';
import styled, { css } from 'styled-components';
import { BiMenu, BiX, BiChevronRight, BiChevronLeft } from 'react-icons/bi';

type Kind = 'primary' | 'secondary';

const StyledButton = styled.button<{
  $hoverStyle: Kind;
  kind: Kind;
  type: 'filled' | 'default';
}>`
  background: transparent;
  border: 0;
  cursor: pointer;
  font-style: normal;
  transition: all linear 0.3s;

  ${({ type }) => {
    if (type === 'filled') {
      return css`
        border-radius: 50%;
        background: white;
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
    return css`
      color: #121212;
    `;
  }}

  ${({ kind }) => {
    if (kind === 'secondary') {
      return css`
        color: white;
      `;
    }
    return css`
      color: #121212;
    `;
  }}

  &:hover {
    ${({ $hoverStyle }) => {
      if ($hoverStyle === 'secondary') {
        return css`
          color: #121212;
        `;
      }
      return css`
        color: var(--color-primary);
      `;
    }}
    ${({ type }) => {
      if (type === 'filled') {
        return css`
          background: var(--color-primary);
        `;
      }
      return css`
        background: transparent;
      `;
    }}
  }
`;

type Props = {
  iconName: string;
  hoverStyle?: Kind;
  kind?: Kind;
  type?: 'filled' | 'default';
  className?: string;
  onClick: () => void;
};

const IconButton: React.FC<Props> = ({ iconName, className, onClick, kind = 'primary', hoverStyle = 'primary', type = 'default' }) => {
  let Icon = null;
  switch (iconName) {
    case 'menu':
      Icon = <BiMenu size={40} />;
      break;
    case 'close':
      Icon = <BiX size={40} />;
      break;
    case 'chevron-right':
      Icon = <BiChevronRight size={40} />;
      break;
    case 'chevron-left':
      Icon = <BiChevronLeft size={40} />;
      break;
    default:
      break;
  }
  return (
    <StyledButton onClick={onClick} type={type} className={className} kind={kind} $hoverStyle={hoverStyle}>
      {Icon}
    </StyledButton>
  );
};

export default IconButton;
