'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import IconButton from './iconButton';
import Drawer from './drawer';
import Button from './button';

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

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const DrawerActions = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledButton = styled(IconButton)`
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
  }
`;

const StyledLink = styled(Link)<{ $active?: boolean }>`
  font-size: 16px;
  font-family: 'Outfit';
  font-weight: 600;
  transition: color linear 0.3s;
  position: relative;
  color: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--text-primary)')};

  &:hover {
    color: var(--color-primary);
  }

  ${({ $active }) =>
    $active &&
    `
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 2px;
      background: var(--color-primary);
    }
  `}
`;

const navLinks = [
  { href: '/ministries', label: 'Ministerios' },
  { href: '/articles', label: 'Artículos de Fe' },
  { href: '/mission', label: 'Misión' },
  { href: '/about', label: 'Nosotros' },
  { href: '/contact', label: 'Contáctanos' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));
  const MenuDrawer = (
    <Drawer side="right" open={open} onClose={() => setOpen(false)} ariaLabel="Menú de navegación">
      <Image
        src="/images/nuevos-comienzos-largo-oscuro.webp"
        alt="Logo iglesia del nazareno nuevos comienzos"
        width={202}
        height={45}
      />
      <LinksWrapperVertical>
        {navLinks.map(link => (
          <li key={link.href}>
            <StyledLink href={link.href} onClick={() => setOpen(false)} $active={isActive(link.href)}>
              {link.label}
            </StyledLink>
          </li>
        ))}
      </LinksWrapperVertical>
      <DrawerActions>
        <Button href="/contact#map" hoverStyle="secondary" label="Visítanos" />
        <Button href="/contact#contact-form" hoverStyle="primary" label="Escríbenos" />
      </DrawerActions>
    </Drawer>
  );

  const PortaledDrawer = typeof document !== 'undefined' ? createPortal(MenuDrawer, document.body) : null;

  return (
    <>
      {PortaledDrawer}
      <Wrapper aria-label="Navegación principal">
        <Link href="/" aria-label="Ir al inicio">
          <Image
            src="/images/logo-black-dove.png"
            alt="Logo iglesia del nazareno nuevos comienzos"
            width={53}
            height={45}
          />
        </Link>
        <StyledButton onClick={() => setOpen(true)} iconName="menu" kind="secondary" ariaLabel="Abrir menú" />
        <LinksWrapper>
          {navLinks.map(link => (
            <li key={link.href}>
              <StyledLink
                href={link.href}
                $active={isActive(link.href)}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </StyledLink>
            </li>
          ))}
        </LinksWrapper>
        <NavActions>
          <Button href="/contact#map" hoverStyle="secondary" label="Visítanos" />
        </NavActions>
      </Wrapper>
    </>
  );
};

export default Navbar;
