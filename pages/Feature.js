import FeaturesPage from '@/components/feature/Feature'
import Head from 'next/head';
import React from 'react'

const Feature = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Features -Md Asikur Rahman</title>
        <meta name="description" content="Features -Md Asikur Description" />
      </Head>
      <FeaturesPage />
    </div>
  );
}

export default Feature