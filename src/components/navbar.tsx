import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Wrapper = styled.nav`
  height: 72px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  padding: 0 32px;
`;

const LinksWrapper = styled.ul`
  display: flex;
  gap: 64px;
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-family: 'Outfit';
  font-weight: 600;
  transition: color linear .3s;

  &:hover {
    color: var(--contrast);
  }
`;

const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Link to="/">
        <StaticImage
          src="../images/nuevos-comienzos-largo-blanco.png"
          alt="A description"
          placeholder="blurred"
          layout="fixed"
          height={45}
        />
      </Link>
      <LinksWrapper>
        <li>
          <StyledLink to="/ministries">Ministerios</StyledLink>
        </li>
        <li>
          <StyledLink to="/articles">Artículos de Fe</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">Nosotros</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contáctanos</StyledLink>
        </li>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Navbar;
