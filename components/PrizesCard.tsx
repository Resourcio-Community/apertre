import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import RichText from './RichText';

interface PrizesCardProps {
  title?: string;
  benefits: string[];
  isOutlined?: boolean;
}

export default function PrizesCard({ title, benefits, isOutlined, children }: PropsWithChildren<PrizesCardProps>) {
  const isAnyBenefitPresent = benefits?.length;

  return (
    <Wrapper isOutlined={isOutlined}>
      <PrizeContainer>
        {children}
        {isAnyBenefitPresent && (
          <CustomRichText>
            <ul>
              {benefits.map((singleBenefit, idx) => (
                idx % 2 === 0
                  ? <li key={idx}>{singleBenefit}</li>
                  : <li key={idx} style={{ color: 'rgb(var(--yellow))' }}>{singleBenefit}</li>
              ))}
            </ul>
          </CustomRichText>
        )}
      </PrizeContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 1rem;
  background: rgba(var(--cardBackground), 0.8);
  box-shadow: ${(p) => (p.isOutlined ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
  transform: ${(p) => (p.isOutlined ? 'scale(1.15)' : 'scale(1.0)')};
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  
  ${media('<=desktop')} {
    box-shadow: var(--shadow-md);
    transform: none;
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  }

  ${media('<=tablet')} {
    margin: 0 20px;
  }

  ${media('<=phone')} {
    margin: 0 20px;
  }
`;

const PrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=tablet')} {
    padding: 0 3rem;
  }
`;


const CustomRichText = styled(RichText)`
  li {
    font-size: 1.6rem;
    margin: auto;
    width: fit-content;

    ${media('<=tablet')} {
      font-size: 1.3rem;
      padding: 0 1rem;
    }
  }
`;
