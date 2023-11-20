import React, { useState } from 'react';
import type { PageProps, HeadFC } from 'gatsby';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

import Layout from '../components/layout';
import Section from '../components/section';
import Button from '../components/button';
import IconButton from '../components/iconButton';
import SectionTitle from '../components/sectionTitle';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 940px;
  background-image: url('/images/hero.png');
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    background: #222324;
    opacity: 0.9;
  }
`;

const GridRow = styled.div<{ columns: number }>`
  display: grid;
  gap: 24px;

  ${({ columns }) => css`
    grid-template-columns: repeat(${columns}, 1fr);
  `}

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-rows: 95px 1fr auto;
  align-items: center;
  justify-items: center;
  gap: 16px;

  p {
    text-align: center;
    font-family: 'Outfit';
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #666666;
    margin-bottom: 25px;
    min-height: 168px;

    @media screen and (max-width: 1150px) {
      min-height: auto;
    }
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
`;

const SliderItem = styled.div`
  margin: 0 10px;
  box-sizing: border-box;
  height: 800px;
`;

const NextButton = styled(IconButton)`
  right: 36%;
  z-index: 200;
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  outline: 0;
`;

const PrevButton = styled(IconButton)`
  left: 36%;
  z-index: 200;
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  outline: 0;
`;

const IndexPage: React.FC<PageProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <Layout>
      <HeroSection>
        <StaticImage src="../images/nuevos-comienzos-blanco.png" alt="A description" placeholder="none" layout="constrained" style={{ width: '50%' }} />
      </HeroSection>
      <Section fullWidth>
        <SectionTitle center subtitle="te invitamos">
          Eventos y Actividades
        </SectionTitle>
        <StyledSlider
          dots={false}
          infinite
          autoplay={false}
          speed={300}
          prevArrow={
            <PrevButton
              iconName="chevron-left"
              type="filled"
              hoverStyle="secondary"
              onClick={() =>
                setCurrentSlide(prev => {
                  if (prev - 1 === 0) return 6;
                  return prev - 1;
                })
              }
            />
          }
          nextArrow={
            <NextButton
              iconName="chevron-right"
              type="filled"
              hoverStyle="secondary"
              onClick={() =>
                setCurrentSlide(prev => {
                  if (prev + 1 === 7) return 1;
                  return prev + 1;
                })
              }
            />
          }
          slidesToShow={currentSlide}
          centerMode
          variableWidth
        >
          <SliderItem>
            <img src="https://placehold.co/450x800" alt="placeholder" />
          </SliderItem>
          <SliderItem>
            <img src="https://placehold.co/450x800" alt="placeholder" />
          </SliderItem>
          <SliderItem>
            <img src="https://placehold.co/450x800" alt="placeholder" />
          </SliderItem>
          <SliderItem>
            <img src="https://placehold.co/450x800" alt="placeholder" />
          </SliderItem>
          <SliderItem>
            <img src="https://placehold.co/450x800" alt="placeholder" />
          </SliderItem>
          <SliderItem>
            <img src="https://placehold.co/450x800" alt="placeholder" />
          </SliderItem>
        </StyledSlider>
      </Section>
      <Section transparent>Section</Section>
      <Section>
        <GridRow columns={3}>
          <Item>
            <StaticImage src="../images/jni-logo.png" alt="A description" placeholder="none" layout="fixed" height={95} />
            <p>
              Creemos que los jóvenes son importantes y tienen un gran potencial para impactar el mundo.
              <br />
              Creamos un lugar seguro donde los jóvenes puedan crecer en su fe, hacer amigos y descubrir su propósito en la vida.
            </p>
            <Button label="Más info..." />
          </Item>

          <Item>
            <StaticImage src="../images/mni-logo.png" alt="A description" placeholder="none" layout="constrained" style={{ width: '50%' }} />
            <p>
              Debemos llevar el mensaje de Jesús a todo el mundo y enseñar a las personas sobre el amor de Dios. Por eso, a través de este ministerio para
              involucrar a nuestra comunidad en las misiones.
            </p>
            <Button label="Más info..." />
          </Item>

          <Item>
            <StaticImage src="../images/dni-logo.png" alt="A description" placeholder="none" layout="fixed" height={95} />
            <p>
              Creemos que el discipulado es esencial para fortalecer nuestra fe y desarrollar una relación más profunda con Dios.
              <br />
              Por eso brindamos apoyo, recursos y oportunidades de crecimiento para que los creyentes puedan profundizar en su vida espiritual.
            </p>
            <Button label="Más info..." />
          </Item>
        </GridRow>
      </Section>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Nuevos Comienzos - IdN</title>;

export default IndexPage;
