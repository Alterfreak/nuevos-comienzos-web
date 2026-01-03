'use client';

import React from 'react';
import styled from 'styled-components';

import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import SectionDescription from '../../components/sectionDescription';
import Button from '../../components/button';
import { specialEvents } from '../../data/activities';

const EventsGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const EventsDescription = styled(SectionDescription)`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 36px;
`;

const EventCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const EventMeta = styled.span`
  font-family: 'Outfit';
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4b4b4b;
`;

const EventTitle = styled.h3`
  margin: 0;
  font-family: Poppins;
  font-weight: 800;
  font-size: 20px;
  color: var(--text-primary);
`;

const EventDescription = styled.p`
  margin: 0;
  font-family: Outfit;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #3b3b3b;
`;

const EventActions = styled.div`
  margin-top: auto;
`;

const SectionEvents: React.FC = () => {
  if (specialEvents.length === 0) return null;

  return (
    <Section>
      <SectionTitle center subtitle="eventos especiales" title="Próximas actividades" />
      <EventsDescription>
        Actividades que ocurren una sola vez o por temporada. Revisa los detalles e inscríbete.
      </EventsDescription>
      <EventsGrid>
        {specialEvents.map(event => (
          <EventCard key={event.id}>
            <EventMeta>{event.date}</EventMeta>
            <EventTitle>{event.title}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
            <EventActions>
              <Button href={event.href} hoverStyle="primary" label={event.ctaLabel} />
            </EventActions>
          </EventCard>
        ))}
      </EventsGrid>
    </Section>
  );
};

export default SectionEvents;
