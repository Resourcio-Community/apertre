import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Collapse from './Collapse';
import RichText from './RichText';

interface AccordionProps {
  title: string;
  isOpen?: boolean;
}

export default function Accordion({ title, isOpen, children }: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;

  const handleAccordionClick = () => {
    setHasCollapsed((prev) => !prev);
  };

  return (
    <AccordionWrapper onClick={handleAccordionClick} isActive={isActive}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isActive={isActive}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon chakra-accordion__icon css-j2ph2z"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isActive} duration={300}>
        <Description>
          <RichText>{children}</RichText>
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  ${media('<=tablet')} {
    font-size: 1.5rem;
  }
`;

const Description = styled.div`
  margin-top: 2.3rem;
  font-size: 1.6rem;

  ${media('<=tablet')} {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 2.4rem;
  transition: transform 0.3s;
  transform: rotateZ(${(p) => (p.isActive ? 180 : 0)}deg);

  & svg:hover {
    transition: color .3s ease-in-out;
    color: rgb(var(--yellow));;
  }
`;

const AccordionWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1.9rem 1.8rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  border-radius: 0.6rem;
  transition: opacity 0.2s;
  cursor: pointer;
  opacity: ${(p) => (p.isActive ? 1 : 0.8)};

  ${media('<=desktop')} {
    width: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`;
