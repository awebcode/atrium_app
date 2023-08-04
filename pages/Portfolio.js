import PortfolioPage from '@/components/portfolio/PortfolioPage'
import Head from 'next/head';
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Portfolio -Md Asikur Rahman</title>
        <meta name="description" content="Portfolio -Md Asikur Description" />
      </Head>
      <PortfolioPage />
    </div>
  );
}

export default Portfolio