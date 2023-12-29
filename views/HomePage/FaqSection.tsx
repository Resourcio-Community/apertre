import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function FaqSection() {
  return (
    <Wrapper id="faq">
      <CustomizedSectionTitle style={{ marginBottom: '5rem' }}>Most <span style={{ color: 'rgb(var(--yellow))' }}> Frequently</span> Asked Questions</CustomizedSectionTitle>
      <Accordion title="What is Apertre, and who organizes it?">
        Apertre is a 15-day long open-source event organized by Resourcio Community and GDSC AOT. It provides a platform for participants to
        enhance their development skills through collaboration on real-world projects.
      </Accordion>
      <Accordion title="How can I participate in Apertre?">
        To participate in Apertre, you can visit the official event website and follow the registration process. Keep an eye out for
        announcements from Resourcio Community and GDSC AOT for registration details.
      </Accordion>
      <Accordion title="What development areas are covered in Apertre?">
        Apertre covers a wide range of development areas, allowing participants to choose from various domains such as web development,
        mobile app development, machine learning, and more.
      </Accordion>
      <Accordion title="Are there any prerequisites to join Apertre?">
        Apertre is open to participants of all skill levels. Whether you are a beginner or an experienced developer, you are welcome to
        join. However, certain projects may have specific skill requirements, so participants should review project details before choosing.
      </Accordion>
      <Accordion title="How does collaboration work during Apertre?">
        Participants will have the opportunity to collaborate with others on real-world projects. The event fosters a collaborative
        environment where participants can join teams, share ideas, and work together to achieve project goals.
      </Accordion>
      <Accordion title="Will there be mentorship available during Apertre?">
        Yes, Apertre provides participants with mentorship and guidance from experienced developers. Mentors will be available to assist
        participants, answer questions, and provide valuable insights throughout the event.
      </Accordion>
      <Accordion title="Can I showcase the projects I work on during Apertre?">
        Absolutely! Apertre encourages participants to showcase their projects. There may be opportunities for project presentations or
        demos, allowing participants to share their work with the community and potentially gain recognition for their contributions.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10vw;
  & > *:not(:first-child) {
    margin-top: 3rem;

    ${media('<=tablet')} {
      margin-top: 1.5rem;
    }
  }
`;


const CustomizedSectionTitle = styled(SectionTitle)`
  font-size: 5rem;

  ${media('<=tablet')} {
    font-size: 3rem;
  }
`