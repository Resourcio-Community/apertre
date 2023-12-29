import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PrizesCard from 'components/PrizesCard';
import SectionTitle from 'components/SectionTitle';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

//second 
const secondBenefits = [
  'Prizes worth of Rs. 1.5k',
  'Cool T-Shirt',
  'Stickers and Swag Kits',
  'Digital Certificate',
  'Social shout out',
  'Digital subscription',
];

//first
const firstBenefits = [
  'Prizes worth of Rs. 2k',
  'Cool T-Shirt',
  'Stickers and Swag Kits',
  'Digital Certificate',
  'Social shout out',
  'Digital subscription',
];

//third
const thirdBenefits = [
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
        <PrizesCard title="2nd" benefits={secondBenefits}>
          <img src="/prizes/second-icon.svg" />
        </PrizesCard>
        <PrizesCard title="1st" benefits={firstBenefits} isOutlined>
          <img src="/prizes/first-icon.svg" />
        </PrizesCard>
        <PrizesCard title="3rd" benefits={thirdBenefits}>
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
  grid-gap: 7rem;
  padding-top: 2rem;
  margin-bottom: 15rem;
  
  ${media('>desktop')} {
    margin: 0 20px;
    grid-template-columns:1fr 1fr 1fr;
  }
  
  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;
    grid-gap: 3.5rem;
    margin: 0 20px;
    grid-template-columns:1fr;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
    grid-template-columns:1fr;
  }
`;
