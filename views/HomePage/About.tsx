import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { media } from 'utils/media';
import BasicSection from 'components/BasicSection';

export default function About() {
  return (
    <CtaWrapper id='about'>
      <Stack>
        <BasicSection imageUrl="/static/assets/apertre.jpg" title="About Apertre" overTitle="&ldquo;Information flow is what the Internet is about&rdquo; - Vint Cerf">
          <p>
            "Apertre": &nbsp;15-day tech program by Resourcio and Google Developer Students Club - Academy Of Technology. Enhance web, mobile, and ML skills, collaborate on real projects, mentorship. Open to all levels. Boost experience, portfolio, and tech career.
          </p>
        </BasicSection>
      </Stack>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

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
