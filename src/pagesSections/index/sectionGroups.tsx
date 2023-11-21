import React from 'react';
import styled from 'styled-components';
import { BiRadioCircleMarked } from 'react-icons/bi';

import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import Button from '../../components/button';

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

const Item = styled.div`
  display: flex;
  gap: 24px;
  color: white;
`;

const ItemTitle = styled.h3`
  font-family: Helvetica Now Text;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 0;
`;

const ItemDescription = styled.span`
  font-family: Outfit;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;

const SectionDescription = styled.p`
  font-family: Outfit;
  font-weight: 400;
  font-size: 20px;
  color: #e1e1e1;
  line-height: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const StyledSection = styled(Section)`
  background-image: url('/images/barranquilla-skyline.jpeg');
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
  },
  {
    id: 'group2',
    title: 'Ciudad Jardín',
    description: 'Todos los JUEVES a las 7pm',
  },
  {
    id: 'group3',
    title: 'Kalamary',
    description: 'Todos los JUEVES a las 7pm',
  },
  {
    id: 'group4',
    title: 'Miramar',
    description: 'Todos los VIERNES a las 7pm',
  },
];

const SectionGroups: React.FC = () => {
  return (
    <StyledSection transparent>
      <Wrapper>
        <div>
          <SectionTitle subtitle="visitános en" title="Grupos de conexión" light />

          <SectionDescription>
            Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de Dios y tener conversaciones
            significativas.
            <br />
            Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
          </SectionDescription>

          <Button hoverStyle="secondary" label="Información" />
        </div>
        <ItemList>
          {groups.map(g => (
            <Item key={g.id}>
              <BiRadioCircleMarked size={80} />
              <div>
                <ItemTitle>{g.title}</ItemTitle>
                <ItemDescription>{g.description}</ItemDescription>
              </div>
            </Item>
          ))}
        </ItemList>
      </Wrapper>
    </StyledSection>
  );
};

export default SectionGroups;
