import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import RoundCard from 'components/RoundCard';
import { media } from 'utils/media';
import SectionTitle from 'components/SectionTitle';
import OverTitle from 'components/OverTitle';

const SPONSORS = [
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'EduHub Community',
    description: 'Platinum Sponsor',
  },
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'Lorem ipsum',
    description: 'Gold Sponsor',
  },
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'Lorem ipsum',
    description: 'Bronze Sponsor',
  },
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'Lorem ipsum',
    description: '',
  },
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'Lorem ipsum',
    description: '',
  },
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'Lorem ipsum',
    description: '',
  },
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'Lorem ipsum',
    description: '',
  },
  {
    imageUrl: '/static/sponsors/asset-1.svg',
    title: 'Lorem ipsum',
    description: '',
  },
];

export default function Sponsors() {
  return (
    <Stack id='sponsors'>
      <OverTitle>
        <span style={{ color: '#fbce1f', fontSize: '2rem', marginRight: '1rem' }}>&#8605;</span>
        &ldquo;Open source is about collaborating; not competing.&rdquo; - Kelsey Hightower
      </OverTitle>
      <SectionTitle>Our <span style={{ color: '#fbce1f' }}>Sponsors</span></SectionTitle>
      <CustomAutofitGrid>
        {/* {SPONSORS.map((sponsor, idx) => (
          <RoundCard key={sponsor.title} {...sponsor} />
        ))} */}
        <span style={{ fontSize: '3rem', textAlign: 'center' }}>
          TO BE ANNOUNCED
        </span>
      </CustomAutofitGrid>
    </Stack>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 25rem;
  padding-top: 2rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(var(--textSecondary));
  align-items: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;