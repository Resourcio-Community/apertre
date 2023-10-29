import Head from 'next/head';
import styled from 'styled-components';
import { EnvVars } from 'env';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';
import About from 'views/HomePage/About';
import Timeline from 'views/HomePage/Timeline';
import ParticlesBackgroud from 'components/ParticlesBackground';
import WaveCta from 'components/WaveCta';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="An open source contribution program"
        />
      </Head>
      <HomepageWrapper>
      <WhiteBackgroundContainer>
          <Hero />
          <Partners />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <About />
          <Timeline />
          <FeaturesGallery />
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
      <WaveCta />
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: #000;
  background-image: url('/static/assets/homeBG.svg');
  background-repeat: "no-repeat",
  background-size: "cover",
  background-position: "center",
  object-fit: "cover",

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
