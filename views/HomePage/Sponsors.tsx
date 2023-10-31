import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import RoundCard from 'components/RoundCard';
import { media } from 'utils/media';
import SectionTitle from 'components/SectionTitle';
import OverTitle from 'components/OverTitle';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'EduHub Community',
    description: 'Platinum Sponsor',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Gold Sponsor',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Bronze Sponsor',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description: '',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description: '',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description: '',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description: '',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description: '',
  },
];

export default function Sponsors() {
  return (
    <Stack>
      <OverTitle>
        <span style={{ color: '#fbce1f', fontSize: '2rem', marginRight: '1rem' }}>&#8605;</span>
        &ldquo;Open source is about collaborating; not competing.&rdquo; - Kelsey Hightower
      </OverTitle>
      <SectionTitle>Our Sponsors</SectionTitle>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <RoundCard key={singleFeature.title} {...singleFeature} />
        ))}
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