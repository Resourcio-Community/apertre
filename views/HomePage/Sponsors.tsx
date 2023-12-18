import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import RoundCard from 'components/RoundCard';
import { media } from 'utils/media';
import SectionTitle from 'components/SectionTitle';

const SPONSORS = [
  {
    title: 'Rise In',
    description: 'Silver Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/asset-2.svg',
        width: 150,
        height: 190,
      },
    ],
    priority: 3,
  },
  {
    title: 'Project X',
    description: 'Gold Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/asset-6.svg',
        width: 150,
        height: 200,
      },
    ],
    priority: 2,
  },
  {
    description: 'Diamond Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/asset-1.svg',
        width: 300,
        height: 120,
      },
      {
        imageUrl: '/static/sponsors/asset-5.svg',
        width: 140,
        height: 140,
      },
    ],
    priority: 1,
  },
  {
    description: 'Gift Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/asset-4.svg',
        width: 500,
        height: 30,
      },
      {
        imageUrl: '/static/sponsors/asset-7.svg',
        width: 520,
        height: 140,
      },
    ],
    priority: 5,
  },
  {
    title: 'Give My Certificate',
    description: 'Certificate Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/asset-3.svg',
        width: 420,
        height: 50,
      },
    ],
    priority: 4,
  },
];

export default function Sponsors() {
  const diamondSponsors = SPONSORS.filter((sponsor) => sponsor.priority === 1);
  const goldSponsor = SPONSORS.find((sponsor) => sponsor.priority === 2);
  const silverSponsor = SPONSORS.find((sponsor) => sponsor.priority === 3);
  const giftSponsor = SPONSORS.find((sponsor) => sponsor.priority === 5);
  const certificateSponsor = SPONSORS.find((sponsor) => sponsor.priority === 4);

  return (
    <Stack id="sponsors">
      <SectionTitle>
        Our <span style={{ color: '#fbce1f' }}>Sponsors</span>
      </SectionTitle>
      <CustomAutofitGrid>
        {diamondSponsors.map((sponsor, idx) => (
          <RoundCard key={idx} {...sponsor} />
        ))}
        {goldSponsor && <RoundCard key={goldSponsor.title} {...goldSponsor} />}
      </CustomAutofitGrid>
      <CustomAutofitGrid>
        {silverSponsor && <RoundCard key={silverSponsor.title} {...silverSponsor}/>}
        {giftSponsor && <RoundCard key={giftSponsor.title} {...giftSponsor} />}
      </CustomAutofitGrid>
      <CustomAutofitGrid>
        {certificateSponsor && <RoundCard key={certificateSponsor.title} {...certificateSponsor} />}
      </CustomAutofitGrid>
    </Stack>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 2rem;
  padding-top: 4rem;
  max-width: 1200px; 
  margin: 0 auto; 
  width: 100%; 
  height: fit-content ;

  ${media('<=tablet')} {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));

  }

  ${media('<=phone')} {
    grid-template-columns: repeat(1, 1fr);

  }

  @media (min-width: 480px) {
    grid-template-areas:
      'diamond gold'
      'silver gift'
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(var(--textSecondary));
  align-items: center;
  justify-content: center; 
`;