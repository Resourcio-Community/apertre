import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate, FaTasks, FaUser, FaCalendarTimes, FaBullhorn, FaCode, FaUsers, FaTrophy, FaMedal } from 'react-icons/fa';

export default function Timeline() {
  return (
    <Container>
      <Stack>
        <OverTitle>&ldquo;I often compare open source to science&rdquo; - Linus Torvalds</OverTitle>
        <SectionTitle>Timeline</SectionTitle>
        <VerticalTimeline
        >
          <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="November 1, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaTasks />}
>
  <h3 className="vertical-timeline-element-title">Mentor & Projects Registration Starts</h3>
  <p>The event kicks off with mentor and project registration, where experienced volunteers and exciting project ideas become available for participants to engage with and contribute to.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="November 2, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaUser />}
>
  <h3 className="vertical-timeline-element-title">Mentee Registration Starts</h3>
  <p>Aspiring learners and contributors can now register for the event, signifying the beginning of their journey to gain knowledge and experience in the open-source community.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="December 2, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaCalendarTimes />}
>
  <h3 className="vertical-timeline-element-title">Project Registration Ends</h3>
  <p>The deadline for submitting new project proposals or ideas for the event approaches, marking the final opportunity for project organizers to get involved.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="December 10, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaBullhorn />}
>
  <h3 className="vertical-timeline-element-title">Project Announced</h3>
  <p>The event organizers reveal the selected open-source projects, giving participants the green light to choose the projects they wish to work on and start collaborating.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="December 26, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaCalendarTimes />}
>
  <h3 className="vertical-timeline-element-title">Mentee and Mentor Registration Ends</h3>
  <p>The registration period for both mentees and mentors concludes, marking the closing of the opportunity to join the event in these roles.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="January 3, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaCode />}
>
  <h3 className="vertical-timeline-element-title">Coding Period Starts</h3>
  <p>With the registration phase complete, participants begin the coding period, diving into their selected open-source projects and contributing their skills to the community.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="January 3, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaUsers />}
>
  <h3 className="vertical-timeline-element-title">Community Bonding Begins</h3>
  <p>An inclusive event, this is where newcomers are welcomed and introduced to the open-source community, providing an opportunity for everyone to network and learn.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="January 4, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaTrophy />}
>
  <h3 className="vertical-timeline-element-title">Leaderboard Publish</h3>
  <p>A moment of recognition and motivation, the leaderboard is updated and shared, showcasing the top contributors and encouraging healthy competition among participants.</p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(22,115,255)' }}
  date="January 17, 2023"
  iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
  icon={<FaCode />}
>
  <h3 className="vertical-timeline-element-title">Coding Period Ends</h3>
  <p>As the coding phase wraps up, contributors conclude their work on open-source projects, ready to showcase their contributions and the improvements they've made to the open-source community.</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid rgb(22,115,255)' }}
date="January 20, 2023"
iconStyle={{ background: 'rgb(22,115,255)', color: '#fff' }}
icon={<FaMedal />}
>

  <h3 className="vertical-timeline-element-title">Results Announced</h3>
  <p>The event reaches its climax with the announcement of results, recognizing outstanding contributions and celebrating the collective achievements of participants in the open-source community.</p>
</VerticalTimelineElement>
        </VerticalTimeline>
      </Stack>
    </Container>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  //   padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  align-items: center;
  //   justify-content: center;

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

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
