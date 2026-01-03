'use client';

import React, { useEffect } from 'react';
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
  ariaLabel?: string;
};

const Drawer: React.FC<React.PropsWithChildren<Props>> = ({ children, side, open, onClose, ariaLabel }) => {
  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <Overlay onClick={onClose} aria-hidden="true" />
      <Wrapper side={side} role="dialog" aria-modal="true" aria-label={ariaLabel ?? 'Menú'}>
        {children}
        <CloseButton iconName="close" onClick={onClose} ariaLabel="Cerrar menú" />
      </Wrapper>
    </>
  );
};

export default Drawer;
