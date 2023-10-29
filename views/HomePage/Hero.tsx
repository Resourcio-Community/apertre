import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import NextImage from "next/image";
import ParticlesBackgroud from 'components/ParticlesBackgroud';


export default function Hero() {
  return (
    <>
      <HeroWrapper>
        <ParticlesBackgroud/>

        <Contents style={{ padding: '0px 1rem' }}>
          <Heading>An <span style={{ color: '#fbce1f' }}>Open Source</span> Event</Heading>
          <Heading3 style={{ margin: '15rem 0 2rem 0' }}>Presented By</Heading3>

          <ImageContainer>
            <NextImage src="/static/assets/resourcio.svg" alt="rc" width={200} height={100} />
            <NextImage src="/static/assets/gdsc_aot.svg" alt="gdscaot" width={200} height={100} />
          </ImageContainer>
        </Contents>

        <Contents style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Span />
          <Heading2>03 JAN 2024</Heading2>
          <Span />
          <Heading3>TO</Heading3>
          <Span />
          <Heading2>17 JAN 2024</Heading2>
          <Span />

          <Button style={{ marginTop: '5rem' }}>
            Register Now
          </Button>
        </Contents>
      </HeroWrapper>

      <ImageContainerOverlay>
        <NextImage src="/static/assets/astronaut.svg" alt="image nei hawa" width={150} height={500} />
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

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
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
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const Heading3 = styled.div`
  font-size: 2.2rem;
  line-height: 1.1;
  margin-top: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;

  ${media('<=tablet')} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Span = styled.span`
  width: 56%; 
  border: 1px solid #fbce1f;
`;


const FloatingContainer = styled.div`
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;

  @keyframes floating {
    0% { transform: translate(0, 0px); }
    50% { transform: translate(0, 15px); }
    100% { transform: translate(0, -0px); } 
  }
`;
