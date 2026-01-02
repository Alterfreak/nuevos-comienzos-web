'use client';

import * as React from 'react';

import styled from 'styled-components';
import Navbar from './navbar';
import Footer from './footer';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const PageContent = styled.main``;

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <PageContent>{children}</PageContent>
      <Footer />
    </>
  );
};

export default Layout;
