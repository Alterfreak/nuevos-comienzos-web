import React from 'react';
import type { Metadata } from 'next';

import pageData from '../../data/pageData';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: pageData.contact.title,
  description: pageData.contact.description,
};

const ContactPage: React.FC = () => {
  return <ContactClient />;
};

export default ContactPage;
