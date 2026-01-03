'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import { whatsappUrl } from '../../data/siteData';

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

const HeroDescription = styled.p`
  max-width: 520px;
  font-family: Outfit;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #2e2e2e;
  margin: 0 0 28px;
  position: relative;
  z-index: 1;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`;

const HeroSecondaryButton = styled(Button)`
  background: transparent;
  color: var(--color-primary-text);
  border: 2px solid var(--color-primary-text);

  &:hover {
    background: var(--color-primary-text);
    color: #ffffff;
    border-color: transparent;
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
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.72));
    z-index: 1;
  }
`;

const ImageLayer = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  filter: grayscale(0.35);
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const images = ['/images/about/about-pic-1.avif', '/images/about/about-pic-2.avif', '/images/about/about-pic-3.avif'];

const Carousel = () => {
  const [, setCurrentIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current!);
      }
    };
  }, []);

  return (
    <CarouselWrapper>
      {images.map((image, index) => (
        <ImageLayer
          key={image}
          ref={el => {
            imageRefs.current[index] = el;
          }}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            quality={60}
            style={{ objectFit: 'cover' }}
            onLoadingComplete={() => {
              if (index === 0 && imageRefs.current[0]) {
                gsap.to(imageRefs.current[0], { opacity: 1, duration: 0.5 });
              }
            }}
          />
        </ImageLayer>
      ))}
    </CarouselWrapper>
  );
};

const SectionHero: React.FC = () => {
  return (
    <HeroSection id="home">
      <Wrapper>
        <MainTitle>Bienvenido a un lugar de nuevos comienzos</MainTitle>
        <Subtitle>Iglesia del Nazareno en Barranquilla</Subtitle>
        <HeroDescription>
          Una comunidad cercana donde puedes crecer en fe, encontrar apoyo y servir junto a otros.
        </HeroDescription>
        <HeroActions>
          <Button href="/contact#map" hoverStyle="primary" label="Planifica tu visita" />
          <HeroSecondaryButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            label="Hablar por WhatsApp"
          />
        </HeroActions>
      </Wrapper>
      <Aff>
        <Carousel />
      </Aff>
    </HeroSection>
  );
};

export default SectionHero;
