'use client';

import React, { useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';

import PageLayout from '../../components/pageLayout';
import Section, { SectionWrapper } from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import SectionDescription from '../../components/sectionDescription';
import Button from '../../components/button';

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

const FormRow = styled.div`
  display: grid;
  width: 100%;
  gap: 32px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  /*
    display: 'flex',
    width: '100%',
    gap: '32px',
  */
`;

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

const ContactClient: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const interest = searchParams.get('interest')?.trim();
  const prefilledMessage = useMemo(() => {
    if (!interest) return '';
    return `Hola, quiero recibir información sobre ${interest}.`;
  }, [interest]);

  return (
    <PageLayout title="Contáctanos">
      <Section>
        <Wrapper>
          <div>
            <SectionTitle subtitle="¿tienes una consulta?" title="Envíanos un mensaje" />

            <SectionDescription>
              Nos reunimos semanalmente en diferentes horarios, días y puntos de la ciudad para compartir la palabra de
              Dios y tener conversaciones significativas.
              <br />
              Ven, únete y crece en tu fe mientras te conectas con otros creyentes.
            </SectionDescription>
          </div>
          <div>
            <Form
              id="contact-form"
              ref={formRef}
              name="contact"
              method="POST"
              onSubmit={async event => {
                try {
                  event.preventDefault();
                  if (!formRef.current) return;

                  const formData = new FormData(formRef.current);
                  const values = Object.fromEntries(formData.entries());

                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                  });

                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }

                  alert('¡Mensaje enviado!');
                  formRef.current.reset();
                } catch (error) {
                  alert('Ocurrió un error intenta más tarde.');
                }
              }}
            >
              {interest && <input type="hidden" name="interest" value={interest} />}
              <FormRow>
                <Input name="name" type="text" id="firstName" label="Tu nombre" required />
                <Input name="lastName" type="text" id="lastName" label="Tu apellido" required />
              </FormRow>
              <FormRow>
                <Input name="email" type="email" id="email" label="Tu email" />
                <Input name="phone" type="tel" id="phone" label="Tu teléfono" />
              </FormRow>
              <Textarea required name="message" id="message" label="Tu mensaje" defaultValue={prefilledMessage} />
              <FormRow>
                <div />
                <Button type="submit" hoverStyle="primary" label="Enviar mensaje" />
              </FormRow>
            </Form>
          </div>
        </Wrapper>
      </Section>
      <StyledSectionWrapper>
        <Map
          id="map"
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

export default ContactClient;
