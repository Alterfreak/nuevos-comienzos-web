import * as React from 'react';
import styled, { css } from 'styled-components';

const Item = styled.div<{ $light: boolean }>`
  display: flex;
  gap: 24px;
  color: black;

  ${({ $light }) =>
    $light &&
    css`
      color: #e1e1e1;
    `}
`;

const ItemTitle = styled.h3<{ $position: 'left' | 'right' }>`
  font-family: Helvetica Now Text;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 0;
  ${({ $position }) =>
    $position &&
    css`
      text-align: ${$position};
    `}
`;

const ItemDescription = styled.span<{ $position: 'left' | 'right' }>`
  font-family: Outfit;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  ${({ $position }) =>
    $position &&
    css`
      text-align: ${$position};
    `}
`;

const TextWrapper = styled.div<{ $position: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $position }) =>
    $position === 'right' &&
    css`
      align-items: flex-end;
    `}
`;

type Props = {
  title: string;
  description: string;
  className?: string;
  light?: boolean;
  Icon: JSX.Element | null;
  iconPosition?: 'left' | 'right';
  alignment?: 'left' | 'right';
};

const InfoItem: React.FC<Props> = ({ title, alignment = 'left', description, className, light = false, Icon, iconPosition = 'left' }) => {
  return (
    <Item $light={light} className={className}>
      {iconPosition === 'left' && Icon}
      <TextWrapper $position={alignment}>
        <ItemTitle $position={alignment}>{title}</ItemTitle>
        <ItemDescription $position={alignment}>{description}</ItemDescription>
      </TextWrapper>
      {iconPosition === 'right' && Icon}
    </Item>
  );
};

export default InfoItem;
