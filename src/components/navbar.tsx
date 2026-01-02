'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import IconButton from './iconButton';
import Drawer from './drawer';

const Wrapper = styled.nav`
  height: 72px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    padding: 0 36px;
  }
`;

const LinksWrapper = styled.ul`
  display: flex;
  gap: 64px;
  list-style: none;
  color: var(--text-primary);

  a {
    color: var(--text-primary);
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const LinksWrapperVertical = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  text-transform: uppercase;
  padding: 24px 0;

  li {
    position: relative;

    &::after {
      content: '';
      border-top: 1px solid black;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -12px;
    }

    & > a {
      color: black;
    }
  }
`;

const StyledButton = styled(IconButton)`
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-family: 'Outfit';
  font-weight: 600;
  transition: color linear 0.3s;

  &:hover {
    color: var(--color-primary);
  }
`;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const MenuDrawer = (
    <Drawer side="right" open={open} onClose={() => setOpen(false)}>
      <Image
        src="/images/nuevos-comienzos-largo-oscuro.webp"
        alt="Logo iglesia del nazareno nuevos comienzos"
        width={202}
        height={45}
      />
      <LinksWrapperVertical>
        <li>
          <StyledLink href="/ministries">Ministerios</StyledLink>
        </li>
        <li>
          <StyledLink href="/articles">Artículos de Fe</StyledLink>
        </li>
        <li>
          <StyledLink href="/about">Nosotros</StyledLink>
        </li>
        <li>
          <StyledLink href="/contact">Contáctanos</StyledLink>
        </li>
      </LinksWrapperVertical>
    </Drawer>
  );

  const PortaledDrawer = typeof document !== 'undefined' ? createPortal(MenuDrawer, document.body) : null;

  return (
    <>
      {PortaledDrawer}
      <Wrapper>
        <Link href="/">
          <Image
            src="/images/logo-black-dove.png"
            alt="Logo iglesia del nazareno nuevos comienzos"
            width={53}
            height={45}
          />
        </Link>
        <StyledButton onClick={() => setOpen(true)} iconName="menu" kind="secondary" />
        <LinksWrapper>
          <li>
            <StyledLink href="/ministries">Ministerios</StyledLink>
          </li>
          <li>
            <StyledLink href="/articles">Artículos de Fe</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">Nosotros</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contáctanos</StyledLink>
          </li>
        </LinksWrapper>
      </Wrapper>
    </>
  );
};

export default Navbar;
