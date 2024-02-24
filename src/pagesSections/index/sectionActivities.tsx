import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import IconButton from '../../components/iconButton';
import events from '../../data/eventSlider';

const StyledSlider = styled(Slider)`
  .slick-list {
  }
`;

const SliderItem = styled.div`
  margin: 0 10px;
  box-sizing: border-box;

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

const SectionActivities: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <Section fullWidth>
      <SectionTitle center subtitle="te invitamos" title="Eventos y Actividades" />
      <StyledSlider
        dots={false}
        infinite
        autoplay={false}
        responsive={[
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              autoplay: true,
              autoplaySpeed: 1,
            },
          },
        ]}
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
        {events.map(e => (
          <SliderItem key={e.id}>
            <img src={e.image} alt={e.description} />
          </SliderItem>
        ))}
      </StyledSlider>
    </Section>
  );
};

export default SectionActivities;
