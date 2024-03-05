import React, { useRef, useState } from 'react';
import type { PageProps } from 'gatsby';
import styled, { css } from 'styled-components';

import PageLayout from '../../../components/pageLayout';
import Section, { SectionWrapper } from '../../../components/section';
import SectionTitle from '../../../components/sectionTitle';
import Input from '../../../components/input';
import Textarea from '../../../components/textarea';
import CustomHead from '../../../components/customHead';
import pageData from '../../../data/pageData';
import Button from '../../../components/button';
import FullPageSpinner from '../../../components/fullpageSpinner';

const StyledSectionWrapper = styled(SectionWrapper)`
  padding: 0;
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
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 64px;
  z-index: 10;
  position: relative;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StyledTitle = styled(SectionTitle)`
  h3 {
    @media screen and (max-width: 767px) {
      margin-bottom: 0;
    }
  }
`;

const StyledButton = styled(Button)`
  max-width: 200px;
`;

const ParagraphTitle = styled.h4`
  margin: 0;
  margin-top: 32px;
  margin-bottom: 24px;
  font-size: 1.6rem;
  font-family: Poppins;
  font-weight: 900;
  color: var(--text-primary);
`;

const Image = styled.img<{ position: 'left' | 'right' }>`
  float: left;
  width: 100%;
  max-width: 320px;
  margin-bottom: 16px;

  ${({ position }) =>
    position === 'left'
      ? css`
          float: left;
          margin-right: 32px;
        `
      : css`
          float: right;
          margin-left: 32px;
        `}

  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

type FormValues = {
  name: string;
  lastName: string;
  age: string;
  phone: string;
  sex: string;
  question: string;
};

const SignUpPage: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const signUp = async (values: FormValues) => {
    try {
      setLoading(true);

      const response = await fetch(`/.netlify/functions/add-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      formRef.current?.reset();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <FullPageSpinner />}
      <PageLayout title="Taller de Sanidad en las Emociones">
        <Section>
          <StyledTitle subtitle="¡Es gratis!" title="Inscríbete" />
          <Wrapper>
            <div>
              <ParagraphTitle>
                <Image src="/images/events/taller-sanidad-square.png" position="left" />
              </ParagraphTitle>
            </div>
            <div>
              <Form
                ref={formRef}
                name="contact"
                method="POST"
                onSubmit={event => {
                  event.preventDefault();
                  if (formRef.current) {
                    const formData = new FormData(formRef.current);
                    const values: any = {};
                    formData.forEach((value, key) => {
                      values[key] = value;
                    });

                    signUp(values as FormValues);
                    console.log(formData);
                  }
                }}
                data-netlify="true"
              >
                <FormRow>
                  <Input name="name" type="text" id="firstName" label="Tu nombre" required />
                  <Input name="lastName" type="text" id="lastName" label="Tu apellido" required />
                </FormRow>
                <FormRow>
                  <Input name="age" type="age" id="age" label="Tu edad" />
                  <Input name="phone" type="phone" id="phone" label="Tu teléfono" />
                </FormRow>
                <Textarea required name="question" id="question" label="¿Por que deseas participar de este taller?" />
                <FormRow style={{ display: 'flex', justifyContent: 'end' }}>
                  <div />
                  <StyledButton type="submit" hoverStyle="primary" label="Inscribirse" />
                </FormRow>
                <input name="form-name" value="contact" type="hidden" />
              </Form>
            </div>
          </Wrapper>
        </Section>
        <StyledSectionWrapper />
      </PageLayout>
    </>
  );
};

export const Head = () => <CustomHead title={pageData.contact.title} description={pageData.contact.description} />;

export default SignUpPage;
