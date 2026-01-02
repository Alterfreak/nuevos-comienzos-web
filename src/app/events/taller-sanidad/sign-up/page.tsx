import React from 'react';
import type { Metadata } from 'next';

import pageData from '../../../../data/pageData';
import SignUpClient from './sign-up-client';

export const metadata: Metadata = {
  title: pageData.contact.title,
  description: pageData.contact.description,
};

const SignUpPage: React.FC = () => {
  return <SignUpClient />;
};

export default SignUpPage;
