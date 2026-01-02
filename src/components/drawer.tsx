'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import IconButton from './iconButton';

const Wrapper = styled.div<{ side: 'left' | 'right' }>`
  position: fixed;
  padding: 24px;
  padding-top: 55px;
  z-index: 100;
  height: 100%;
  width: 350px;
  background-color: white;
  top: 0;
  box-sizing: border-box;
  transition: 0.3s;
  @media screen and (max-width: 425px) {
    width: 100%;
  }

  ${({ side }) =>
    side === 'left'
      ? css`
          left: 0;
        `
      : `right: 0;`}
`;

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 98;
  background-color: black;
  opacity: 0.4;
  top: 0;
  left: 0;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 55px;
  right: 20px;
`;

type Props = {
  side: 'left' | 'right';
  open: boolean;
  onClose: () => void;
};

const Drawer: React.FC<React.PropsWithChildren<Props>> = ({ children, side, open, onClose }) => {
  if (!open) return false;

  return (
    <>
      <Overlay onClick={onClose} />
      <Wrapper side={side}>
        {children}
        <CloseButton iconName="close" onClick={onClose} />
      </Wrapper>
    </>
  );
};

export default Drawer;
