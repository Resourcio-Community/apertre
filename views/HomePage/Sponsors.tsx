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
    title: 'Cloud Native Native Foundation',
    description: 'Diamond Sponsor',
    image:{
      
      width:140,
      height:100
    }
  },
  {
    imageUrl: '/static/sponsors/asset-5.svg',
    title: 'Quine',
    description: 'Diamond Sponser',
    image:{
      width:100,
      height:100
    }
  },
  {
    imageUrl: '/static/sponsors/asset-6.svg',
    title: 'Project X',
    description: 'Gold Sponser',
    image:{
      width:100,
      height:100
    }
  },
  {
    imageUrl: '/static/sponsors/asset-2.svg',
    title: 'Lorem ipsum',
    description: 'Silver Sponsor',
    image:{
      width:140,
      height:100
    }
  },
  {
    imageUrl: '/static/sponsors/asset-3.svg',
    title: 'GIve My Certificate',
    description: 'Certificate Sponsor',
    image:{
      width:190,
      height:90
    }
  },
  {
    imageUrl: '/static/sponsors/asset-4.svg',
    title: 'Dimension Labs',
    description: 'Gifts Sponser',
    image:{
      width:190,
      height:50
    }
  },
  

];

export default function Sponsors() {
  return (
    <Stack id='sponsors'>
      { <OverTitle>
        <span style={{ color: '#fbce1f', fontSize: '2rem', marginRight: '1rem' }}>&#8605;</span>
        &ldquo;Open source is about collaborating; not competing.&rdquo; - Kelsey Hightower
      </OverTitle> }
      <SectionTitle>Our <span style={{ color: '#fbce1f' }}>Sponsors</span></SectionTitle>
      <CustomAutofitGrid>
        
        {/* <span style={{ fontSize: '3rem', textAlign: 'center', display:'flex'}}>
          {SPONSORS.map((sponser,idx)=>(
          <RoundCard key={idx} {...sponser} />
        ))}
        </span> */}
        {SPONSORS.map((sponser,idx)=>(
          <RoundCard key={idx} {...sponser}/>


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