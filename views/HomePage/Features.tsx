import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Start your Journey',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Apply as Contributor',
    buttonhref: ''
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Lead the Pack',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Apply as Mentor',
    buttonhref: ''
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Inviting Projects & NGOs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Apply as an Organization/Project Admin',
    buttonhref: ''
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Add a Shade to GSSOC',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
    buttonText: 'Sponsor us',
    buttonhref: ''
  }
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={idx} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  grid-gap: 4rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
