import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled, { css } from 'styled-components';

import PageLayout from '../components/pageLayout';
import Section from '../components/section';
import CustomHead from '../components/customHead';
import pageData from '../data/pageData';

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-size: 1.1rem;
  font-family: Outfit;
  font-weight: normal;
  line-height: 1.6;
  color: var(--text-primary);
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
  max-width: 500px;
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

const AboutPage: React.FC<PageProps> = () => {
  return (
    <PageLayout title="¿Quienes somos?">
      <Section>
        <div>
          <ParagraphTitle>
            <Image src="/images/about/about-pic-1.jpeg" position="left" />
            ¿Quiénes somos?
          </ParagraphTitle>
          <Paragraph>
            La Iglesia del Nazareno Nuevos Comienzos es una comunidad de fe vibrante y acogedora en Barranquilla, Colombia, plantada el 07 de agosto de 2022 por
            un grupo de pastores misioneros con un corazón ardiente por el Evangelio. Nacida de una visión divina y de la necesidad de servir a todos los
            rincones de Barranquilla, nuestra iglesia comenzó reuniéndose en un hotel, uniendo a personas de diferentes partes de la ciudad. Al obtener nuestro
            espacio en el templo &quot;Iglesia del Nazareno Bienvenido a Casa&quot; en el sur, y conscientes de la distancia para aquellos en el norte,
            decidimos plantar la Iglesia del Nazareno Nuevos Comienzos, reafirmando nuestro compromiso de hacer discípulos semejantes a Cristo en cada rincón de
            Barranquilla.
          </Paragraph>
          <ParagraphTitle>Misión y Visión</ParagraphTitle>
          <Paragraph>
            Nuestra misión es hacer discípulos semejantes a Cristo en Barranquilla, preparándolos y entrenándolos para el liderazgo y el ministerio, llevando el
            mensaje de Cristo no solo a través de la predicación sino también impactando la comunidad mediante actos de compasión. En Nuevos Comienzos, creemos
            en la transformación del corazón humano a través del amor y servicio, siguiendo el ejemplo de Jesús.
          </Paragraph>
          <ParagraphTitle>
            <Image src="/images/about/about-pic-2.jpeg" position="right" style={{ maxWidth: '450px' }} />
            Actividades y Programas
          </ParagraphTitle>
          <Paragraph>
            Estamos contentos de contar con distintos ministerios diseñados para alcanzar y servir a nuestra comunidad en todas las etapas de la vida. Desde el
            Ministerio de Compasión, que se extiende para satisfacer las necesidades básicas de los vulnerables, hasta el DNI (Discipulado Nazareno
            Internacional), MNI (Misiones Nazarenas Internacionales) y JNI (Juventud Nazarena Internacional), estamos comprometidos con la formación espiritual
            y el envío misionero de nuestra congregación.
          </Paragraph>
          <ParagraphTitle>
            <Image src="/images/about/about-pic-3.jpeg" position="left" style={{ marginTop: '24px' }} />
            Comunidad e Impacto Local
          </ParagraphTitle>
          <Paragraph>
            Impactamos a la comunidad local recaudando alimentos, ropa, útiles escolares y brindando apoyo a los niños en situación de necesidad a través del
            comedor en la Iglesia del Nazareno Bienvenido a Casa. Nuestro compromiso con los actos de compasión refleja la esencia de nuestra fe y el llamado a
            servir a otros como Jesús lo hizo.
          </Paragraph>
          <Paragraph>
            En la Iglesia del Nazareno Nuevos Comienzos, cada persona es bienvenida a unirse a esta familia de fe. Juntos, buscamos crecer en nuestro amor por
            Dios y por los demás, mientras trabajamos para llevar el mensaje transformador de Cristo a cada esquina de Barranquilla y más allá.
          </Paragraph>
        </div>
      </Section>
    </PageLayout>
  );
};

export const Head = () => <CustomHead title={pageData.about.title} description={pageData.about.description} />;

export default AboutPage;
