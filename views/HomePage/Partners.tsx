import NextImage from 'next/image';
import styled from 'styled-components';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const PARTNER_LOGOS = [
  { name: 'SC CSE.png', link: 'https://sccsebio.vercel.app/?utm_source=sc+cse' },
  { name: 'Samarth.png',link: 'https://www.samarthtmsl.live/' },
  { name: 'GDSC NIET.png', link: 'https://gdsc.community.dev/noida-institute-of-engineering-and-technology-greater-noida/' },
  { name: 'GDSC_Asansol.png',link: 'https://www.linkedin.com/company/gdsc-aec' },
  { name: 'Techsurfers.png',link: 'https://www.linkedin.com/company/tech-surfers/' },
  { name: 'GFG_NIET.png',link: 'https://linktr.ee/gfgniet' },
];

export default function Partners() {
  SwiperCore.use([Autoplay])
  return (
    <PartnersWrapper>
      <Title>Community partners</Title>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        modules={[Autoplay]}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((partner) => (
          <SwiperSlide key={partner.name}>
            {partner.link ? (
              <PartnerLink href={partner.link} target="_blank" rel="noopener noreferrer">
                <NextImage src={`/partners/${partner.name}`} alt={normalizePartnerLogoName(partner.name)} width={80} height={60} />
              </PartnerLink>
            ) : (
              <NextImage src={`/partners/${partner.name}`} alt={normalizePartnerLogoName(partner.name)} width={80} height={60} />
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
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;
  color: #fbce1f;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const PartnerLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;
