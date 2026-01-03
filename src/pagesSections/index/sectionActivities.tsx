'use client';

import React from 'react';
import styled from 'styled-components';

import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import SectionDescription from '../../components/sectionDescription';
import Button from '../../components/button';
import { weeklyActivities } from '../../data/activities';

const ActivitiesGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ActivitiesDescription = styled(SectionDescription)`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 36px;
`;

const ActivityCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ActivityMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const MetaPill = styled.span`
  background: rgba(126, 217, 87, 0.16);
  color: #1f3b1f;
  border-radius: 999px;
  padding: 6px 12px;
  font-family: 'Outfit';
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const ActivityTitle = styled.h3`
  margin: 0;
  font-family: Poppins;
  font-weight: 800;
  font-size: 20px;
  color: var(--text-primary);
`;

const ActivityDescription = styled.p`
  margin: 0;
  font-family: Outfit;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #3b3b3b;
`;

const ActivityActions = styled.div`
  margin-top: auto;
`;

const SectionActivities: React.FC = () => {
  return (
    <Section>
      <SectionTitle center subtitle="agenda semanal" title="Cultos y reuniones" />
      <ActivitiesDescription>
        Estos son nuestros horarios regulares. Si deseas más información o quieres participar, escríbenos.
      </ActivitiesDescription>
      <ActivitiesGrid>
        {weeklyActivities.map(activity => (
          <ActivityCard key={activity.id}>
            <ActivityMeta>
              <MetaPill>{activity.day}</MetaPill>
              <MetaPill>{activity.time}</MetaPill>
              <MetaPill>{activity.location}</MetaPill>
            </ActivityMeta>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <ActivityDescription>{activity.description}</ActivityDescription>
            <ActivityActions>
              <Button
                href={`/contact?interest=${encodeURIComponent(activity.interest)}`}
                hoverStyle="secondary"
                label="Pedir info"
              />
            </ActivityActions>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
    </Section>
  );
};

export default SectionActivities;
