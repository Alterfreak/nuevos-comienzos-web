import * as React from 'react';
import type { PageProps, HeadFC } from 'gatsby';
import styled from 'styled-components';

import PageLayout from '../components/pageLayout';
import Section, { SectionWrapper } from '../components/section';
import SectionTitle from '../components/sectionTitle';
import Input from '../components/input';
import Textarea from '../components/textarea';

const StyledSectionWrapper = styled(SectionWrapper)`
  padding: 0;
`;

const Map = styled.iframe`
  width: 100%;
  border: 0;
`;

const Form = styled.form`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 32px;
`;

const AboutPage: React.FC<PageProps> = () => {
  return (
    <PageLayout title="Ministerios">
      <Section>
        <SectionTitle subtitle="¿tienes una consulta?">Envíanos un mensaje</SectionTitle>
        <div>
          <Form>
            <div
              style={{
                display: 'grid',
                width: '100%',
                gap: '32px',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <Input name="name" id="firstName" label="Tu nombre" />
              <Input name="lastName" id="lastName" label="Tu apellido" />
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                gap: '32px',
              }}
            >
              <Input name="email" id="email" label="Tu email" />
              <Input name="phone" id="phone" label="Tu teléfono" />
            </div>
            <Textarea name="message" id="message" label="Tu mensaje" />
          </Form>
        </div>
      </Section>
      <StyledSectionWrapper>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15666.688501677228!2d-74.8225431!3d10.988102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42df11bba4e47%3A0xe7f8710eca03a10b!2sIglesia%20del%20Nazareno%20%22Nuevos%20Comienzos%22!5e0!3m2!1sen!2sco!4v1700324443288!5m2!1sen!2sco"
          width="600"
          height="450"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </StyledSectionWrapper>
    </PageLayout>
  );
};

export const Head: HeadFC = () => <title>Nuevos Comienzos - IdN</title>;

export default AboutPage;
