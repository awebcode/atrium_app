import AboutPage from '@/components/about/AboutPage'
import Head from 'next/head';
import React from 'react'

const About = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>About -Md Asikur Rahman</title>
        <meta name="description" content="Artrium -Md Asikur Description" />
      </Head>
      <AboutPage />
    </div>
  );
}

export default About