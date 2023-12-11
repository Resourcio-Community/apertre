import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import NextImage from "next/image";
import ParticlesBackground from 'components/ParticlesBackground';


export default function Hero() {
  return (
    <>
      <HeroWrapper>
        <ParticlesBackground/>

        <Content>
          <Heading>An <span style={{ color: 'rgb(var(--yellow))' }}>Open Source</span> Event</Heading>
          <Heading3>Presented By</Heading3>

          <ImageContainer>
            <Image src="/static/assets/resourcio.svg" alt="rc" width={200} height={100} />
            <Image src="/static/assets/gdsc_aot.svg" alt="gdscaot" width={200} height={100} />
          </ImageContainer>
        </Content>

        <TimelineContent>
          <Span />
          <Heading2>03 JAN 2024</Heading2>
          <Span />
          <Duration>TO</Duration>
          <Span />
          <Heading2>17 JAN 2024</Heading2>
          <Span />

          <Button style={{ marginTop: '5rem' }}>
            <a href='#event' style={{ textDecoration: 'none', color: 'white' }}>Register Now</a>
          </Button>
        </TimelineContent>
      </HeroWrapper>

      <ImageContainerOverlay>
        <NextImage src="/static/assets/astronaut.svg" alt="astronaut" width={150} height={500} />
      </ImageContainerOverlay>
    </>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  gap: 4rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 0 1rem;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }

  ${media('<=tablet')} {
    margin-top: -2rem;
  }
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 1rem;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }

  ${media('<=tablet')} {
    margin-top: -6rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: -30px;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }

  ${media('<=tablet')} {
    margin-top: 0.2rem;
    justify-content: center;
    svg {
      max-width: 60%;
    }
  }
`;

const Image = styled(NextImage)`
  width: 200px;
  height: 100px;

  ${media('<=tablet')} {
    width: 160px;
    height: 80px;
  }
`;

const ImageContainerOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 10vh;

  svg {
    max-width: 45rem;
  }

  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes floating {
    0% { transform: translate(0, 0px); }
    50% { transform: translate(0, 12px); }
    100% { transform: translate(0, 0px); } 
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7rem;
  line-height: 1.2;
  margin-bottom: 8rem;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 4.5rem;
  line-height: 1.1;
  padding: 1.5rem 0;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 2.5rem;
    padding: 1rem 0;
  }
`;

const Heading3 = styled.div`
  font-size: 2.2rem;
  line-height: 1.1;
  margin: 16rem 0 2rem 0;
  letter-spacing: 2px;

  ${media('<=tablet')} {
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    margin: 5rem 0 1.5rem 0;
  }
`;

const Duration = styled.div`
  font-size: 2.2rem;
  line-height: 1.1;
  margin: 3rem 0 2rem 0;
  letter-spacing: 2px;

  ${media('<=tablet')} {
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    margin: 2rem 0;
  }
`;

const Span = styled.span`
  width: 56%; 
  border: 1px solid rgb(var(--yellow));

  ${media('<=tablet')} {
    width: 110%;
  }
`;
