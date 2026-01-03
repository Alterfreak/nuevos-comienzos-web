import React from 'react';
import pageData from '../../data/pageData';
import { createMetadata } from '../../lib/seo';
import ContactClient from './contact-client';

export const metadata = createMetadata({
  title: pageData.contact.title,
  description: pageData.contact.description,
  path: '/contact',
});

const ContactPage: React.FC = () => {
  return <ContactClient />;
};

export default ContactPage;
