import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import Button from './button';

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
  box-sizing: border-box;
`;

const LogosWrapper = styled.div`
  display: flex;
  gap: 64px;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  gap: 64px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 64px;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
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
  margin-top: 24px;
  gap: 10px;

  p {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
    color: #ffffff;
    font-family: 'Outfit';
  }
`;

const Divider = styled.hr`
  border-color: rgba(247, 247, 247, 0.15);
  border-bottom: none;
`;

const LinksWrapper = styled.div`
  margin: 48px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 40px;
`;

const LinksColumn = styled.div`
  h3 {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 28px;
    margin-top: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li a {
      font-family: 'Outfit';
      font-weight: 400;
      font-size: 15px;
      line-height: 31px;
      color: #969aab;
      transition: color linear 0.3s;

      &:hover {
        color: white;
      }
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <ImagesWrapper>
          <LogosWrapper>
            <a href="#home">
              <StaticImage src="../images/ancho-blanco-norte.png" alt="A description" placeholder="blurred" layout="fixed" height={95} />
            </a>
            <a href="#home">
              <StaticImage src="../images/nuevos-comienzos-blanco.png" alt="A description" placeholder="blurred" layout="fixed" height={95} />
            </a>
          </LogosWrapper>
          <SocialNetworks>
            <SocialNetwork target="_blank" href="https://www.facebook.com/nazbaqnorte">
              <BiLogoFacebook color="white" />
            </SocialNetwork>
            <SocialNetwork target="_blank" href="https://instagram.com/nazbaqnorte">
              <BiLogoInstagram color="white" />
            </SocialNetwork>
          </SocialNetworks>
        </ImagesWrapper>
        <Divider />
        <LinksWrapper>
          <LinksColumn>
            <h3>Iglesia del Nazareno</h3>
            <ul>
              <li>
                <a href="#home">Artículos de Fe</a>
              </li>
              <li>
                <a href="#home">Iglesia Global</a>
              </li>
              <li>
                <a href="#home">Misión</a>
              </li>
              <li>
                <a href="#home">Valores Nazarenos</a>
              </li>
            </ul>
          </LinksColumn>
          <LinksColumn>
            <h3>Nosotros</h3>
            <ul>
              <li>
                <a href="#home">¿Quiénes somos?</a>
              </li>
              <li>
                <a href="#home">¿Dónde estamos?</a>
              </li>
              <li>
                <a href="#home">Oportunidades de servicio</a>
              </li>
              <li>
                <a href="#home">Valores Nazarenos</a>
              </li>
            </ul>
          </LinksColumn>
          <LinksColumn>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Ministerios</a>
              </li>
              <li>
                <a href="#home">Juventud Nazarena Internacional</a>
              </li>
              <li>
                <a href="#home">Misiones Nazarenas Internacionales</a>
              </li>
              <li>
                <a href="#home">Discipulado Nazareno Internacional </a>
              </li>
            </ul>
          </LinksColumn>
          <LinksColumn>
            <h3>Noticias</h3>
            <div>
              <Button hoverStyle="secondary" label="Contáctanos" />
            </div>
          </LinksColumn>
        </LinksWrapper>
        <Divider />
        <Disclaimer>
          <p>
            &copy; 2023 <span>Alterfreak</span>. Todos los derechos reservados
          </p>
          <p>Hecho con ✝️ en Barranquilla, Colombia.</p>
        </Disclaimer>
      </Content>
    </Wrapper>
  );
};

export default Footer;
