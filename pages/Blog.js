import BlogPage from '@/components/blog/BlogPage'
import Head from 'next/head';
import React from 'react'

const Blog = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Blog -Md Asikur Rahman</title>
        <meta name="description" content="Blog -Md Asikur Description" />
      </Head>
      <BlogPage />
    </div>
  );
}

export default Blog