import React from 'react';

import pageData from '../../../../data/pageData';
import { createMetadata } from '../../../../lib/seo';
import SignUpClient from './sign-up-client';

export const metadata = createMetadata({
  title: pageData.eventSanidad.title,
  description: pageData.eventSanidad.description,
  path: '/events/taller-sanidad/sign-up',
});

const SignUpPage: React.FC = () => {
  return <SignUpClient />;
};

export default SignUpPage;
