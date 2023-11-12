import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import { media } from 'utils/media';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';

const FEATURES = [
  {
    imageUrl: '/static/event/mentee.webp',
    title: 'Start your Journey',
    description: "Express your interest and willingness to contribute your skills, knowledge, or efforts. A contributor often implies a collaborative spirit and a desire to actively participate in a shared goal.",
    buttonText: 'Apply as Contributor',
    buttonhref: 'https://bit.ly/apertrementee',
    manual: "https://drive.google.com/file/d/1TXyBVigwenlxqRq022b6qUh94WewdbKA/view?usp=drive_link"
  },
  {
    imageUrl: '/static/event/mentor.webp',
    title: 'Lead the Pack',
    description: "Express a willingness to guide, support, and share your expertise with others who are seeking to learn and grow. Mentors play a crucial role in fostering the development of mentees, providing valuable insights, advice, and encouragement.",
    buttonText: 'Apply as Mentor',
    buttonhref: 'https://bit.ly/apertrementors',
    manual: "https://drive.google.com/file/d/1I9zlXrnUV_VrmfGMlKcfbnOhVroohAzL/view?usp=drive_link"
  },
  {
    imageUrl: '/static/event/projectadmin.webp',
    title: 'Inviting Projects',
    description: "Understanding of project's objectives, your commitment to maintaining timelines. Also, demonstrating flexibility, adaptability, and a proactive approach to addressing challenges can make you a valuable asset in a project administration role.",
    buttonText: 'Apply as Project Admin',
    buttonhref: 'http://bit.ly/apertreprojects',
  },
  {
    imageUrl: '/static/event/sponsors.webp',
    title: 'Call for Sponsors',
    description: "Are you excited to sponsor us in our flagship event Apertre which in turn will provide an opportunity for your company to gain exposure and popularity? ",
    buttonText: 'Sponsor us',
    buttonhref: 'https://bit.ly/Apertresponsor',
  },
];

export default function JoinEvent() {
  return (
    <CtaWrapper id='event'>
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

  ${media('<=tablet')} {
    display: flex;
    justify-content: center;
  }
`;
