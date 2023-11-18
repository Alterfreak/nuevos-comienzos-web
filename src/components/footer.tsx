import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  max-width: 1320px;
  width: 100%;
  padding: 64px 32px;
`;

const LogosWrapper = styled.div`
  display: flex;
  gap: 64px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  gap: 64px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 64px;
`;

const SocialNetworks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialNetwork = styled.a`
  display: flex;
  width: 50px;
  height: 50px;
  border: 2px solid rgba(247, 247, 247, 0.15);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color linear 0.3s;

  &:hover {
    background-color: var(--contrast);
  }
`;

const Disclaimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  margin-top: 24px;

  p {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
    color: #FFFFFF;
    font-family: 'Outfit';
  }
`;

const Divider = styled.hr`
  border-color: rgba(247, 247, 247, 0.15);
  border-bottom: none;
`;

const LinksWrapper = styled.div`
  margin: 48px 0;
`;

const Footer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <ImagesWrapper>
          <LogosWrapper>
            <a href="#home">
              <StaticImage
                src="../images/ancho-blanco-norte.png"
                alt="A description"
                placeholder="blurred"
                layout="fixed"
                height={95}
              />
            </a>
            <a href="#home">
              <StaticImage
                src="../images/nuevos-comienzos-blanco.png"
                alt="A description"
                placeholder="blurred"
                layout="fixed"
                height={95}
              />
            </a>
          </LogosWrapper>
          <SocialNetworks>
            <SocialNetwork target="_blank" href="https://www.facebook.com/nazbaqnorte">
              <BiLogoFacebook color="white" />
            </SocialNetwork>
            <SocialNetwork target="_blank" href="https://instagram.com/nazbaqnorte">
              <BiLogoInstagram color="white"/>
            </SocialNetwork>
          </SocialNetworks>
        </ImagesWrapper>
        <Divider />
        <LinksWrapper></LinksWrapper>
        <Divider />
        <Disclaimer>
          <p>&copy; 2023 <a>Alterfreak</a>. Todos los derechos reservados</p>
          <p>Hecho con ✝️ en Barranquilla, Colombia.</p>
        </Disclaimer>
      </Content>
    </Wrapper>
  );
};

export default Footer;
