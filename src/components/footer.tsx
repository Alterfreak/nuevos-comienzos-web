import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp, BiMap } from 'react-icons/bi';
import Button from './button';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--background-secondary);
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
    background-color: var(--color-primary);
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

const Text = styled.span`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  font-family: 'Outfit';

  a,
  a:visited {
    color: #ffffff;
    transition: color linear 0.3s;

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const ContactItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: min-content auto;
  gap: 8px;
  margin-bottom: 16px;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <ImagesWrapper>
          <LogosWrapper>
            <a href="#home">
              <StaticImage src="../images/ancho-blanco-norte.webp" alt="A description" placeholder="blurred" layout="fixed" height={95} />
            </a>
            <a href="#home">
              <StaticImage src="../images/nuevos-comienzos-blanco.webp" alt="A description" placeholder="blurred" layout="fixed" height={95} />
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
                <a href="/articles">Artículos de Fe</a>
              </li>
              <li>
                <a target="_blank" href="https://nazarene.org/" rel="noreferrer">
                  Iglesia Global
                </a>
              </li>
              <li>
                <a target="_blank" href="https://nazarene.org/index.php/es/misi%C3%B3n" rel="noreferrer">
                  Misión
                </a>
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
                <a href="/about">¿Quiénes somos?</a>
              </li>
              <li>
                <a href="/contact#map">¿Dónde estamos?</a>
              </li>
              <li>
                <a href="#home">Oportunidades de servicio</a>
              </li>
              <li>
                <a href="#home">Ofrendas</a>
              </li>
            </ul>
          </LinksColumn>
          <LinksColumn>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="/ministries">Ministerios</a>
              </li>
              <li>
                <a target="_blank" href="https://nazarene.org/es/quienes-somos/organizaci%C3%B3n/ministerios/juventud-nazarena-internacional" rel="noreferrer">
                  Juventud Nazarena Internacional
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://nazarene.org/es/quienes-somos/organizaci%C3%B3n/ministerios/misiones-nazarenas-internacionales"
                  rel="noreferrer"
                >
                  Misiones Nazarenas Internacionales
                </a>
              </li>
              <li>
                <a target="_blank" href="https://nazarene.org/es/quienes-somos/organization/ministries/sdmi" rel="noreferrer">
                  Discipulado Nazareno Internacional{' '}
                </a>
              </li>
            </ul>
          </LinksColumn>
          <LinksColumn>
            <h3>Contacto</h3>
            <div>
              <ContactItem>
                <BiMap color="white" size={22} />
                <Text>
                  <a target="_blank" href="https://maps.app.goo.gl/QJ5H4mhPW2CcGBm19" rel="noreferrer">
                    Cl. 80#41d-09, Ciudad Jardín, Barranquilla
                  </a>
                </Text>
              </ContactItem>
              <ContactItem>
                <BiLogoWhatsapp color="white" size={22} />
                <Text>
                  <a
                    target="_blank"
                    href="https://wa.me/573243158514?text=%C2%A1Hola%20Iglesia%20del%20Nazareno!%20Deseo%20saber%20m%C3%A1s%20de%20la%20iglesia."
                    rel="noreferrer"
                  >
                    +57 324 3158514
                  </a>
                </Text>
              </ContactItem>
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
