
import React, { useState } from 'react';
import styled from 'styled-components';

interface FiltersProps {
  onFilterChange: (selectedFilters: string[], searchQuery: string) => void;
}

// List
const techStacks = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next', 'Python', 'Java', 'Rust'];

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
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
          <TechStackButton key={techStack} onClick={() => handleFilterToggle(techStack)} active={selectedFilters.includes(techStack)}>
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
  padding: 2.5rem;
`;

const TechStacksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TechStackButton = styled.button<{ active: boolean }>`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  background-color: ${({ active }) => (active ? '#fbce1f' : 'transparent')};
  color: ${({ active }) => (active ? 'black' : '#fff')};
  border: 2px solid #fbce1f;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? '#fbce1f' : 'black')};
  }
`;

export default Filters;

