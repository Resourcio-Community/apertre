import NextImage from 'next/image';
import styled from 'styled-components';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';
import 'swiper/css';
import 'swiper/css/autoplay';


const PARTNER_LOGOS = [
  { name: 'SC CSE.png', link: 'https://sccsebio.vercel.app/?utm_source=sc+cse' },
  { name: 'Samarth.png', link: 'https://www.samarthtmsl.live/' },
  { name: 'GDSC NIET.png', link: 'https://gdsc.community.dev/noida-institute-of-engineering-and-technology-greater-noida/' },
  { name: 'Techsurfers.png', link: 'https://www.linkedin.com/company/tech-surfers/' },
  { name: 'GFG_NIET.png', link: 'https://linktr.ee/gfgniet' },
  { name: 'GDSC_Asansol.png', link: 'https://www.linkedin.com/company/gdsc-aec' },
  { name: 'KGEC.png', link: 'https://twitter.com/DevKgec' },
];


export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>Community partners</Title>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: true, pauseOnMouseEnter: true, waitForTransition: true }}
        speed={3500}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          768: {
            slidesPerView: 4,
          },
          1025: {
            slidesPerView: 6,
            spaceBetween: 20
          },
        }}
        modules={[Autoplay]}
        className='swiper-wrapper'
      >
        {PARTNER_LOGOS.map((partner, idx) => (
          <SwiperSlide key={idx + PARTNER_LOGOS.length}>
            {partner.link ? (
              <PartnerLink href={partner.link} target="_blank" rel="noopener noreferrer">
                <StyledImage src={`/partners/${partner.name}`} alt={normalizePartnerLogoName(partner.name)} width={120} height={90} />
              </PartnerLink>
            ) : (
              <StyledImage src={`/partners/${partner.name}`} alt={normalizePartnerLogoName(partner.name)} width={120} height={90} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 4.6rem;
  text-align: center;
  opacity: 0.8;
  color: rgb(var(--yellow));

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  padding-bottom: 4rem;

  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }
  
  .swiper-slide {
    z-index: 99;
  }
`;

const PartnerLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const StyledImage = styled(NextImage)`
  border-radius: 1.5rem;
  opacity: 0.65;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${media('<=tablet')} {
    width: 90px;
    height: 70px;
  }
`
