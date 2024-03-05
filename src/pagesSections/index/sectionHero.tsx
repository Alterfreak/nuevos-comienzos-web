import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 1440px) {
    padding: 0 36px;
  }

  @media screen and (max-width: 550px) {
    font-size: 3rem;
    padding: 0 16px;
    padding-left: 32px;
  }

  @media screen and (max-width: 425px) {
    font-size: 3rem;
    padding: 0 16px;
    padding-left: 32px;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.3rem;
  }
`;

const MainTitle = styled.h1`
  max-width: 1440px;
  width: 100%;
  position: relative;
  z-index: 1;
  font-family: Poppins;
  font-weight: 900;
  font-size: 5rem;
  display: block;
  letter-spacing: -2px;
  line-height: 1;
  color: var(--text-primary);
  margin: 0;
  margin-bottom: 16px;

  @media screen and (max-width: 425px) {
    font-size: 3.9rem;
    padding-top: 80px;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.9rem;
    padding-top: 80px;
  }

  @media screen and (max-width: 320px) {
    font-size: 2.4rem;
    padding-top: 80px;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  max-width: 1440px;
  width: 100%;
  position: relative;
  z-index: 1;
  font-family: Outfit;
  margin: 0;
  font-weight: normal;
  display: block;
  line-height: 1;
  color: var(--text-primary);

  @media screen and (max-width: 375px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  max-height: 940px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-bottom: 1px solid var(--border-primary);

  @media screen and (max-width: 425px) {
    height: 60vh;
  }
`;

const Aff = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-main);
    mix-blend-mode: normal;
    opacity: 0.9;
    z-index: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  opacity: 0;
  filter: grayscale(1);
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const images = ['/images/about/about-pic-1.jpeg', '/images/about/about-pic-2.jpeg', '/images/about/about-pic-3.jpeg'];

const Carousel = () => {
  const [, setCurrentIndex] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout>();

  const triggerNextImage = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % images.length;
      const currentImage = imageRefs.current[prevIndex];
      const nextImage = imageRefs.current[nextIndex];

      if (currentImage && nextImage) {
        gsap.to(currentImage, { opacity: 0, duration: 3.5 });
        gsap.to(nextImage, { opacity: 1, duration: 1.5 });
      }

      return nextIndex;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      triggerNextImage();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <CarouselWrapper>
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          ref={el => {
            imageRefs.current[index] = el;
          }}
          onLoad={() => index === 0 && gsap.to(imageRefs.current[0], { opacity: 1, duration: 0.5 })}
        />
      ))}
    </CarouselWrapper>
  );
};

const SectionHero: React.FC = () => {
  return (
    <HeroSection>
      <Wrapper>
        <MainTitle>Bienvenido a un lugar de nuevos comienzos</MainTitle>
        <Subtitle>Iglesia del Nazareno en Barranquilla</Subtitle>
      </Wrapper>
      <Aff>
        <Carousel />
      </Aff>
    </HeroSection>
  );
};

export default SectionHero;
