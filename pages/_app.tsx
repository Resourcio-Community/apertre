import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import WaveCta from 'components/WaveCta';
import { NavItems } from 'types';
import NavigationDrawer from 'components/NavigationDrawer';

const navItems: NavItems = [
  { title: 'About', href: '' },
  { title: 'Projects', href: '/projects' },
  { title: 'Sponsors', href: '' },
  { title: 'Leaderboard', href: '/ledearboard' },
  { title: 'FAQ', href: '' },
  { title: 'Team', href: '' },
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
      {/* <ColorModeScript /> */}
      <GlobalStyle />

      <Providers>
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <WaveCta />
        <Footer />
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