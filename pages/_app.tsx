import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import { NavItems } from 'types';
import BackToTopButton from 'components/BackToTop';


const navItems: NavItems = [
  { title: 'About', href: '/#about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Sponsors', href: '/#sponsors' },
  // { title: 'Leaderboard', href: '/leaderboard' },
  { title: 'FAQ', href: '/#faq' },
  { title: 'Contact', href: '/contact' }
];


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.png" type='image/png' />
      </Head>
      <GlobalStyle />

      <Providers>
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <Footer />
        <BackToTopButton />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
  )
}


export default MyApp;