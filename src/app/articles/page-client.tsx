'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import PageLayout from '../../components/pageLayout';
import Section from '../../components/section';
import SectionTitle from '../../components/sectionTitle';
import InfoItem from '../../components/infoItem';

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ArticleItem = styled(InfoItem)`
  position: relative;
  &::after {
    content: '';
    border-top: 1px solid rgba(150, 150, 150, 0.3);
    position: absolute;
    width: 100%;
    bottom: -20px;
  }
`;

const articles = [
  {
    number: 1,
    title: 'Un Dios Trino',
    description:
      'Creemos en un solo Dios eternamente existente e infinito. El Dios, quien es amor santo y luz, es trino en su ser esencial, revelado como Padre, Hijo y Espíritu Santo.',
    verse: 'Mateo 28:19',
    image: '/images/trinity1.webp',
    imageWidth: 100,
    imageHeight: 85,
  },
  {
    number: 2,
    title: 'Jesucristo',
    description:
      'Creemos en la divinidad de Jesucristo, su nacimiento virginal, su vida sin pecado, sus milagros, su muerte expiatoria en la cruz, su resurrección, su ascensión al cielo y su eventual regreso. dos naturalezas enteras y perfectas, es decir, la deidad y la humanidad, fueron unidas en una persona, verdadero Dios y verdadero hombre, el Dios-hombre.',
    verse: 'Juan 1:14',
    image: '/images/fish1.webp',
    imageWidth: 100,
    imageHeight: 80,
  },
  {
    number: 3,
    title: 'El Espíritu Santo',
    description:
      'Creemos en el Espíritu Santo, la Tercera Persona de la Divina Trinidad, que está siempre presente y eficazmente activo en la Iglesia de Cristo y juntamente con ella, convenciendo al mundo de pecado, regenerando a los que se arrepienten y creen, santificando a los creyentes y guiando a toda verdad la cual está en Jesucristo.',
    verse: 'Juan 16:13',
    image: '/images/dove1.webp',
    imageWidth: 100,
    imageHeight: 90,
  },
  {
    number: 4,
    title: 'Las Sagradas Escrituras',
    description:
      'Creemos que los libros del Antiguo y Nuevo Testamentos fueron dados por inspiración divina, revelando infaliblemente la voluntad de Dios respecto a nosotros en todo lo necesario para nuestra salvación.',
    verse: '2 Timoteo 3:16-17',
    image: '/images/bible1.webp',
    imageWidth: 100,
    imageHeight: 45,
  },
  {
    number: 5,
    title: 'El Pecado, Original y Personal',
    description:
      'Creemos que el pecado entró en el mundo por la desobediencia de nuestros primeros padres, y la muerte por el pecado. Creemos que el pecado es de dos clases: pecado original o depravación y pecado actual o personal.',
    verse: 'Romanos 5:12',
    image: '/images/cross1.webp',
    imageWidth: 100,
    imageHeight: 109,
  },
  {
    number: 6,
    title: 'La Expiación',
    description:
      'Creemos que Jesucristo por sus sufrimientos, por el derramamiento de su preciosa sangre y por su muerte en la cruz hizo una expiación plena por todo el pecado de la humanidad, y que esta expiación es la única base de la salvación y que es suficiente para todo individuo de la raza de Adán.',
    verse: '1 Juan 2:2',
    image: '/images/chirho1.webp',
    imageWidth: 100,
    imageHeight: 108,
  },
  {
    number: 7,
    title: 'La Gracia Preveniente',
    description:
      'Creemos que la gracia de Dios por medio de Jesucristo se concede gratuitamente a todas las personas, capacitando a todos los que quieran, para volverse del pecado a la justicia, creer en Jesucristo, recibir perdón y limpieza del pecado y seguir las buenas obras agradables y aceptables ante Él.',
    verse: 'Efesios 2:8-9',
    image: '/images/sun1.webp',
    imageWidth: 100,
    imageHeight: 87,
  },
  {
    number: 8,
    title: 'El Arrepentimiento',
    description:
      'Creemos que el Espíritu de Dios da a todos los que se arrepienten la ayuda bondadosa de la contrición de corazón y la esperanza de misericordia para que puedan creer a fin de recibir perdón y vida espiritual.',
    verse: 'Hechos 3:19',
    image: '/images/weat1.webp',
    imageWidth: 100,
    imageHeight: 85,
  },
  {
    number: 9,
    title: 'Justificación, Regeneración y Adopción',
    description:
      'Creemos en cómo los creyentes son hechos justos, renacidos espiritualmente y adoptados en la familia de Dios.',
    verse: '2 Corintios 5:17',
    image: '/images/grapes1.webp',
    imageWidth: 100,
    imageHeight: 107,
  },
  {
    number: 10,
    title: 'La Entera Santificación y el Amor Perfecto',
    description:
      'Creemos que la santificación es la obra de Dios por medio de la cual transforma a los creyentes a la semejanza de Cristo. Ésta es efectuada mediante la gracia de Dios por el Espíritu Santo en la santificación inicial, o regeneración (simultánea a la justificación), la entera santificación y la obra continua de perfeccionamiento del creyente por el Espíritu Santo, culminando en la glorificación, en la cual somos completamente conformados a la imagen del Hijo.',
    verse: '1 Tesalonicenses 5:23-24',
    image: '/images/heart1.webp',
    imageWidth: 100,
    imageHeight: 107,
  },
  {
    number: 11,
    title: 'La Iglesia',
    description:
      'Creemos en la Iglesia, la comunidad que confiesa a Jesucristo como Señor, el pueblo del pacto de Dios renovado en Cristo, el Cuerpo de Cristo llamado a ser uno por el Espíritu Santo mediante la Palabra.',
    verse: 'Efesios 4:11-16',
    image: '/images/boat1.webp',
    imageWidth: 100,
    imageHeight: 106,
  },
  {
    number: 12,
    title: 'El Bautismo',
    description:
      'Creemos que el bautismo cristiano, ordenado por nuestro Señor, es un sacramento que significa la aceptación de los beneficios de la expiación e incorporación en el Cuerpo de Cristo. El bautismo es un medio de gracia que proclama la fe en Jesucristo como Salvador.',
    verse: 'Mateo 28:19-20',
    image: '/images/water1.webp',
    imageWidth: 100,
    imageHeight: 82,
  },
  {
    number: 13,
    title: 'La Cena del Señor',
    description:
      'Creemos que la Santa Cena instituida por nuestro Señor y Salvador Jesucristo es un sacramento que proclama su vida, sufrimientos, muerte sacrificial, resurrección y la esperanza de su segunda venida. La Santa Cena es un medio de gracia en el cual Cristo está presente por el Espíritu.',
    verse: 'Mateo 28:19-20',
    image: '/images/chalice1.webp',
    imageWidth: 100,
    imageHeight: 106,
  },
  {
    number: 14,
    title: 'La Sanidad Divina',
    description:
      'Creemos en la doctrina de la sanidad divina e instamos a nuestro pueblo a ofrecer la oportunidad de hacer la oración de fe para la sanidad de los enfermos. Creemos también que Dios sana a través de la ciencia médica.',
    verse: 'Santiago 5:14-16',
    image: '/images/oil1.webp',
    imageWidth: 100,
    imageHeight: 90,
  },
  {
    number: 15,
    title: 'La Segunda Venida de Cristo',
    description:
      'Creemos que el Señor Jesucristo vendrá otra vez; que los que vivamos en el momento de su venida no precederemos a los que durmieron en Cristo Jesús; mas si hemos permanecido en Él, seremos arrebatados con los santos resucitados para reunirnos con el Señor en el aire, y estaremos siempre con Él.',
    verse: '1 Tesalonicenses 4:16-17',
    image: '/images/angel1.webp',
    imageWidth: 100,
    imageHeight: 100,
  },
  {
    number: 16,
    title: 'La Resurrección, el Juicio y el Destino',
    description:
      'Creemos que a los que son salvos por creer en Jesucristo nuestro Señor y le siguen en obediencia se les asegura la vida gloriosa y eterna; y que los que permanezcan impenitentes hasta el fin, sufrirán eternamente en el infierno.',
    verse: 'Apocalipsis 20:12-15',
    image: '/images/alpha1.webp',
    imageWidth: 100,
    imageHeight: 107,
  },
];

const ArticlesPageClient: React.FC = () => {
  return (
    <PageLayout title="¿En que creemos?">
      <Section>
        <SectionTitle subtitle="¿En que creemos?" title="Los artículos de Fe" />
        <ArticlesList>
          {articles.map(article => (
            <ArticleItem
              alignment={article.number % 2 === 0 ? 'right' : 'left'}
              iconPosition={article.number % 2 === 0 ? 'left' : 'right'}
              key={article.number}
              title={`${article.number}. ${article.title}`}
              description={article.description}
              Icon={
                <Image
                  alt={article.image.replace('/images/', '').replace('1.webp', '')}
                  src={article.image}
                  width={article.imageWidth}
                  height={article.imageHeight}
                  style={{ objectFit: 'contain' }}
                />
              }
            />
          ))}
        </ArticlesList>
      </Section>
    </PageLayout>
  );
};

export default ArticlesPageClient;
