import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PrizesCard from 'components/PrizesCard';
import SectionTitle from 'components/SectionTitle';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

//second 
const mentorBenefits = [
  'Prizes worth of Rs. 1.5k',
  'Cool T-Shirt',
  'Stickers and Swag Kits',
  'Digital Certificate',
  'Social shout out',
  'Digital subscription',
];

//first
const menteeBenefits = [
  'Prizes worth of Rs. 2k',
  'Cool T-Shirt',
  'Stickers and Swag Kits',
  'Digital Certificate',
  'Social shout out',
  'Digital subscription',
];

//third
const topBenefits = [
  'Prizes worth of Rs. 1k',
  'Cool T-Shirt',
  'Stickers and Swag Kits',
  'Digital Certificate',
  'Social shout out',
  'Digital subscription',
];

export default function PricingTablesSection() {
  return (
    <Stack id="prizes">
      <OverTitle>
        <span style={{ color: 'rgb(var(--yellow))', fontSize: '2rem', marginRight: '1rem' }}>&#8605;</span>
        &ldquo;Open source is about collaborating; not competing.&rdquo; - Kelsey Hightower
      </OverTitle>
      <SectionTitle style={{ color: 'rgb(var(--yellow))' }}>Prizes</SectionTitle>
      <CustomAutofitGrid>
        <PrizesCard title="2nd" benefits={mentorBenefits}>
          <img src="/prizes/second-icon.svg" />
        </PrizesCard>
        <PrizesCard title="1st" benefits={menteeBenefits} isOutlined>
        <img src="/prizes/first-icon.svg" />
        </PrizesCard>
        <PrizesCard title="3rd" benefits={topBenefits}>
        <img src="/prizes/third-icon.svg" />
        </PrizesCard>
      </CustomAutofitGrid>
    </Stack>
  );
}

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

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 25rem;
  grid-gap: 5rem;
  padding-top: 2rem;
  margin-bottom: 15rem;
  @media (max-width: 768px) and (min-width:360px) {
    margin: 0 20px;
    grid-template-columns:1fr;
  }
  @media (min-width: 768px) and (max-width:992px) {
    margin: 0 20px;
    grid-template-columns:1fr 1fr;
  }
  @media (min-width:992px) {
    margin: 0 20px;
    grid-template-columns:1fr 1fr 1fr;
  }
  
  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;

  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
