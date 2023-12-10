import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

interface FiltersProps {
  onFilterChange: (selectedFilters: string[], searchQuery: string) => void;
}

const techStacks = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'SpringBoot', 'Kotlin', 'React', 'NextJS', 'python',
  'Java', 'Rust', 'SaSS', 'NodeJS', 'Express', 'MongoDB', 'Bootstrap', 'ML', 'Flutter', 'Django', 'Material UI', 'MySQL'];

export default function Filters({ onFilterChange }: PropsWithChildren<FiltersProps>) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterToggle = (techStack: string) => {
    let newFilters: string[];

    if (selectedFilters.includes(techStack)) {
      newFilters = selectedFilters.filter((filter) => filter !== techStack);
    } else {
      newFilters = [techStack];
    }

    setSelectedFilters(newFilters);
    onFilterChange(newFilters, '');
  };

  return (
    <Wrapper>
      <TechStacksWrapper>
        {techStacks.map((techStack) => (
          <TechStackButton
            key={techStack}
            onClick={() => handleFilterToggle(techStack)}
            active={selectedFilters.includes(techStack)}
          >
            {techStack}
          </TechStackButton>
        ))}
      </TechStacksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TechStacksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    max-width: 600px; 
  }
  
  @media (min-width: 1024px) {
    max-width: 800px;
`;

const TechStackButton = styled.button<{ active: boolean }>`
  margin: 1.5rem 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  background-color: ${({ active }) => (active ? 'rgba(var(--primary))' : 'transparent')};
  color: white;
  border: 2px solid ${({ active }) => (active ? 'rgba(var(--primary))' : ' rgb(var(--yellow))')};

  &:hover {
    background-color: ${({ active }) => (active ? 'rgba(var(--primary))' : ' rgb(var(--yellow))')};
    color: white

  }

`;
