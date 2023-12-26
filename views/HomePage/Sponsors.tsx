import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import RoundCard from 'components/RoundCard';
import { media } from 'utils/media';
import SectionTitle from 'components/SectionTitle';
import { Sponsor } from 'models/sponsor.model';

const SPONSORS: Sponsor[] = [
  {
    description: 'Diamond Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/cncf.svg',
        width: 300,
        height: 120,
      },
      {
        imageUrl: '/static/sponsors/quine.svg',
        width: 140,
        height: 140,
      },
    ],
    priority: 1,
  },
  {
    title: 'Project X',
    description: 'Gold Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/projectX.svg',
        width: 150,
        height: 200,
      },
    ],
    priority: 2,
  },
  {
    description: 'Silver Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/risein.svg',
        width: 150,
        height: 190,
      },
    ],
    priority: 3,
  },
  {
    description: 'Certificate Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/givemycertificate.svg',
        width: 420,
        height: 50,
      },
    ],
    priority: 4,
  },
  {
    description: 'Gift Sponsor',
    images: [
      {
        imageUrl: '/static/sponsors/dimensionlab.svg',
        width: 500,
        height: 30,
      },
      {
        imageUrl: '/static/sponsors/flutterkolkata.svg',
        width: 520,
        height: 140,
      },
    ],
    priority: 5,
  },
];

export default function Sponsors() {
  const diamondSponsors = SPONSORS.find((sponsor) => sponsor.priority === 1);
  const goldSponsor = SPONSORS.find((sponsor) => sponsor.priority === 2);
  const silverSponsor = SPONSORS.find((sponsor) => sponsor.priority === 3);
  const certificateSponsor = SPONSORS.find((sponsor) => sponsor.priority === 4);
  const giftSponsor = SPONSORS.find((sponsor) => sponsor.priority === 5);

  return (
    <Stack id="sponsors">
      <SectionTitle>
        Our <span style={{ color: '#fbce1f' }}>Sponsors</span>
      </SectionTitle>

      <CustomAutofitGrid>
        {diamondSponsors && <RoundCard {...diamondSponsors} />}
        {goldSponsor && <RoundCard {...goldSponsor} />}
      </CustomAutofitGrid>

      <CustomAutofitGrid>
        {silverSponsor && <RoundCard {...silverSponsor}/>}
        {giftSponsor && <RoundCard {...giftSponsor} />}
      </CustomAutofitGrid>

      <CustomAutofitGrid>
        {certificateSponsor && <RoundCard {...certificateSponsor} />}
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
  width: 100%; 
  height: fit-content;

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
  
  & > *:not(:first-child) {
    width: 90%;

  }
`;