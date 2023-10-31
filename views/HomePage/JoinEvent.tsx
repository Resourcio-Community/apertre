import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Start your Journey',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Apply as Contributor',
    buttonhref: '',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Lead the Pack',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Apply as Mentor',
    buttonhref: '',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Inviting Projects & NGOs',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Apply as an Organization/Project Admin',
    buttonhref: '',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Add a Shade to APERTRE',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Sponsor us',
    buttonhref: '',
  },
];

export default function JoinEvent() {
  return (
    <CtaWrapper>
      {/* <Separator /> */}
      <Stack>
        <OverTitle>
          <span style={{ color: '#fbce1f', fontSize: '2rem', marginRight: '1rem' }}>&#8605;</span>
          &ldquo;I often compare open source to science&rdquo; - Linus Torvalds
        </OverTitle>

        <SectionTitle>Join <span style={{ color: '#fbce1f' }}>Apertre</span></SectionTitle>

        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={idx} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Stack>
    </CtaWrapper>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  grid-gap: 3.5rem 3.5rem;
  padding-top: 2rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
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

const CtaWrapper = styled.div`
  padding: 10rem;
  background: rgb(var(--secondary));
`;
