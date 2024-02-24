import React from 'react';
import styled from 'styled-components';
import { BiRadioCircleMarked } from 'react-icons/bi';

import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import InfoItem from '../../components/infoItem';
import SectionDescription from '../../components/sectionDescription';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  z-index: 10;
  position: relative;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ItemList = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSection = styled(Section)`
  background-image: url('/images/barranquilla-skyline.webp');
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    background: #161719;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    left: 0;
  }
`;

const groups = [
  {
    id: 'group1',
    title: 'Alameda del Río',
    description: 'Todos los LUNES a las 7pm',
    link: 'https://maps.app.goo.gl/44Mejoa7TyoamTHE9',
  },
  {
    id: 'group3',
    title: 'Kalamary',
    description: 'Todos los JUEVES a las 7pm',
    link: 'https://maps.app.goo.gl/44Mejoa7TyoamTHE9',
  },
  {
    id: 'group4',
    title: 'Miramar',
    description: 'Todos los VIERNES a las 7pm',
    link: 'https://maps.app.goo.gl/44Mejoa7TyoamTHE9',
  },
];

const SectionGroups: React.FC = () => {
  return (
    <StyledSection transparent>
      <Wrapper>
        <div>
          <SectionTitle subtitle="visitános en" title="Grupos de conexión" light />

          <SectionDescription $light>
            Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de Dios y tener conversaciones
            significativas.
            <br />
            Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
          </SectionDescription>

          {/* <Button hoverStyle="secondary" label="Información" /> */}
        </div>
        <ItemList>
          {groups.map(g => (
            <InfoItem onClick={() => {}} light title={g.title} description={g.description} key={g.id} Icon={<BiRadioCircleMarked size={80} />} />
          ))}
        </ItemList>
      </Wrapper>
    </StyledSection>
  );
};

export default SectionGroups;
