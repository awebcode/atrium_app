import Navbar from '@/components/navbar/Navbar';
import '@/styles/globals.css'
import Head from 'next/head';
import Dropdown from './Dropdown';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Dropdown/> */}
      <Component {...pageProps} />
      <Head>
        {" "}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
          crossorigin="anonymous"
        />
          <link rel = "icon" href ="/me.jpg" 
        type = "image/x-icon"/>
      </Head>
    </>
  );
}
