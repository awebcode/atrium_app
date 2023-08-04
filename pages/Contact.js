
import ContactPage from '@/components/contact/ContactPage'
import Head from 'next/head';
import React from 'react'

const Contact = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Contact -Md Asikur Rahman</title>
        <meta name="description" content="Contact -Md Asikur Description" />
      </Head>
      <ContactPage />
    </div>
  );
}

export default Contact