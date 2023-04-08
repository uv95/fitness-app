import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Fitness App</title>
        <meta name="description" content="Fitness exercises" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
