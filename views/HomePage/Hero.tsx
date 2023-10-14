import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import NextImage from "next/image";
import Card from 'react-animated-3d-card';


export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (<>
    <HeroWrapper>
      <Contents>
      {/* <NextImage src="/assets/logo.svg" alt="image nei hawa" width={200} height={200} /> */}
        <CustomOverTitle>The coolest, open source program you have ever seen</CustomOverTitle>
        <Heading>An Open Source Event</Heading>
        <Heading3>
          Presented By
        </Heading3>

        <ImageContainer>
        <NextImage src="/assets/resourcio.svg" alt="image nei hawa" width={200} height={100} />
        <NextImage src="/assets/gdsc_aot.svg" alt="image nei hawa" width={200} height={100} />
        </ImageContainer>

        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Register Now <span>&rarr;</span>
          </Button>
          <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Learn More <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      
      {/* <Card       
        style={{
          backgroundColor: 'black',
          backgroundImage: `url('/assets/logo.svg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '450px',
          height: '300px',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Card clicked')}
      /> */}

      
    </HeroWrapper>

    <ImageContainerOverlay>
        <NextImage src="/assets/astronaut.svg" alt="image nei hawa" width={150} height={500} />
      </ImageContainerOverlay>
    </>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

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

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;

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
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Heading3 = styled.div`
  font-size: 2.5rem;
  line-height: 1.1;
  margin-top: 3rem;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;