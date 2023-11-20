import React from 'react';

const CustomHead: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default CustomHead;
