'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import IconButton from '../../components/iconButton';
import events from '../../data/eventSlider';

const StyledSlider = styled(Slider as React.ComponentClass<any>)`
  .slick-list {
    height: 450px;
  }
`;

const SliderItem = styled.figure`
  margin: 0 10px;
  box-sizing: border-box;
  position: relative;

  img {
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 425px) {
    margin: 0;
    max-width: 100vw;

    img {
      max-width: 100vw;
    }
  }
`;

const Caption = styled.figcaption`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.55);
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 12px;
  font-family: 'Outfit';
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  backdrop-filter: blur(6px);

  span {
    display: block;
    font-weight: 400;
    font-size: 14px;
    margin-top: 4px;
    opacity: 0.85;
  }
`;

const NextButton = styled(IconButton)`
  right: 50px;
  z-index: 200;
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  outline: 0;

  &:hover {
    background: var(--color-primary);
  }

  @media screen and (max-width: 425px) {
    right: 10px;
  }
`;

const PrevButton = styled(IconButton)`
  left: 50px;
  z-index: 200;
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  outline: 0;

  &:hover {
    background: var(--color-primary);
  }

  @media screen and (max-width: 425px) {
    left: 10px;
  }
`;

type ArrowProps = {
  onClick?: () => void;
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <PrevButton
    iconName="chevron-left"
    type="filled"
    hoverStyle="secondary"
    ariaLabel="Anterior"
    onClick={onClick ?? (() => {})}
  />
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <NextButton
    iconName="chevron-right"
    type="filled"
    hoverStyle="secondary"
    ariaLabel="Siguiente"
    onClick={onClick ?? (() => {})}
  />
);

const SectionActivities: React.FC = () => {
  return (
    <Section fullWidth>
      <SectionTitle center subtitle="te invitamos" title="Eventos y Actividades" />
      <StyledSlider
        dots={false}
        infinite
        autoplay
        autoplaySpeed={5000}
        pauseOnHover
        responsive={[
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            },
          },
        ]}
        speed={300}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        slidesToShow={3}
        centerMode
        variableWidth
      >
        {events.map(e => (
          <SliderItem key={e.id}>
            <Image src={e.image} alt={e.title} width={450} height={450} sizes="(max-width: 425px) 100vw, 450px" />
            <Caption>
              {e.title}
              <span>{e.description}</span>
            </Caption>
          </SliderItem>
        ))}
      </StyledSlider>
    </Section>
  );
};

export default SectionActivities;
