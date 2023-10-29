import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiRocketThruster, GiRocketFlight } from 'react-icons/gi';


export default function Timeline() {
  return (
    // TODO: fix date font size
    <>
      <Container>
        <Stack>
          <OverTitle>
            <span style={{ color: '#fbce1f', fontSize: '2rem', marginRight: '1rem' }}>&#8605;</span>
            &ldquo;I often compare open source to science&rdquo; - Linus Torvalds
          </OverTitle>
          <SectionTitle>Timeline</SectionTitle>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="November 1, 2023"
              // dateClassName='event-date'
              iconStyle={{ background: '#0f0f0f' }}
              icon={<GiRocketThruster />}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Mentor & Projects Registration Starts</h3>
              <p style={{ fontSize: '1.4rem' }}>The event kicks off with mentor and project registration, where experienced volunteers and exciting project ideas become available for participants to engage with and contribute to.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="November 2, 2023"
              iconStyle={{ background: '#c1553b', filter: 'drop-shadow(6px 6px 18px #c1553b)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Mentee Registration Starts</h3>
              <p style={{ fontSize: '1.4rem' }}>Aspiring learners and contributors can now register for the event, signifying the beginning of their journey to gain knowledge and experience in the open-source community.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="December 2, 2023"
              iconStyle={{ background: '#2cb9a8', filter: 'drop-shadow(6px 6px 18px #2cb9a8)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Project Registration Ends</h3>
              <p style={{ fontSize: '1.4rem' }}>The deadline for submitting new project proposals or ideas for the event approaches, marking the final opportunity for project organizers to get involved.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="December 10, 2023"
              iconStyle={{ background: '#973c9c', filter: 'drop-shadow(6px 6px 18px #973c9c)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Projects Announced</h3>
              <p style={{ fontSize: '1.4rem' }}>The event organizers reveal the selected open-source projects, giving participants the green light to choose the projects they wish to work on and start collaborating.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="December 26, 2023"
              iconStyle={{ background: '#ffcc00', filter: 'drop-shadow(6px 6px 18px #ffcc00)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Mentee and Mentor Registration Ends</h3>
              <p style={{ fontSize: '1.4rem' }}>The registration period for both mentees and mentors concludes, marking the closing of the opportunity to join the event in these roles.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="January 3, 2023"
              iconStyle={{ background: '#c1553b', filter: 'drop-shadow(6px 6px 18px #c1553b)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Coding Period Starts</h3>
              <p style={{ fontSize: '1.4rem' }}>With the registration phase complete, participants begin the coding period, diving into their selected open-source projects and contributing their skills to the community.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="January 3, 2023"
              iconStyle={{ background: '#2cb9a8', filter: 'drop-shadow(6px 6px 18px #2cb9a8)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Community Bonding Begins</h3>
              <p style={{ fontSize: '1.4rem' }}>An inclusive event, this is where newcomers are welcomed and introduced to the open-source community, providing an opportunity for everyone to network and learn.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="January 4, 2023"
              iconStyle={{ background: '#973c9c', filter: 'drop-shadow(6px 6px 18px #973c9c)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Leaderboard Publish</h3>
              <p style={{ fontSize: '1.4rem' }}>A moment of recognition and motivation, the leaderboard is updated and shared, showcasing the top contributors and encouraging healthy competition among participants.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(22,115,255)' }}
              date="January 17, 2023"
              iconStyle={{ background: '#ffcc00', filter: 'drop-shadow(6px 6px 18px #ffcc00)' }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Coding Period Ends</h3>
              <p style={{ fontSize: '1.4rem' }}>As the coding phase wraps up, contributors conclude their work on open-source projects, ready to showcase their contributions and the improvements they've made to the open-source community.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(22,115,255)', color: '#fff', fontSize: '2rem' }}
              contentArrowStyle={{ borderRight: '10px solid rgb(22,115,255)' }}
              date="January 20, 2023"
              iconStyle={{ background: '#0f0f0f' }}
              icon={<GiRocketFlight />}
            >

              <h3 className="vertical-timeline-element-title" style={{ color: '#dfff00' }}>Results Announced</h3>
              <p style={{ fontSize: '1.4rem' }}>The event reaches its climax with the announcement of results, recognizing outstanding contributions and celebrating the collective achievements of participants in the open-source community.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Stack>
      </Container>

      <style>
        {`
          .vertical-timeline-element-date{
              font-size: 1.5rem;
          }
        `}
      </style>
    </>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
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

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
