'use client';

import React from 'react';
import styled from 'styled-components';
import { BiRadioCircleMarked } from 'react-icons/bi';

import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import InfoItem from '../../components/infoItem';
import SectionDescription from '../../components/sectionDescription';
import Button from '../../components/button';
import { connectionGroups } from '../../data/activities';

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

const GroupActions = styled.div`
  margin-top: 24px;
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

const SectionGroups: React.FC = () => {
  return (
    <StyledSection transparent>
      <Wrapper>
        <div>
          <SectionTitle subtitle="visitános en" title="Grupos de conexión" light />

          <SectionDescription $light>
            Nos reunimos en casas en distintos barrios para compartir la Palabra y cuidarnos en comunidad.
            <br />
            La ubicación exacta se comparte al inscribirte.
          </SectionDescription>

          <GroupActions>
            <Button
              href={`/contact?interest=${encodeURIComponent('Grupos de conexión')}`}
              hoverStyle="secondary"
              label="Quiero unirme"
            />
          </GroupActions>
        </div>
        <ItemList>
          {connectionGroups.map(g => (
            <InfoItem
              href={`/contact?interest=${encodeURIComponent(`Grupo de conexión en ${g.title} (${g.day} ${g.time})`)}`}
              ariaLabel={`Pedir información del grupo de conexión en ${g.title}`}
              light
              title={g.title}
              description={`${g.day} · ${g.time}`}
              key={g.id}
              Icon={<BiRadioCircleMarked size={80} />}
            />
          ))}
        </ItemList>
      </Wrapper>
    </StyledSection>
  );
};

export default SectionGroups;
