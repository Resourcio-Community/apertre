import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from 'views/ProjectPage/ProjectCard';
import Filters from 'views/ProjectPage/Filters';
import { media } from 'utils/media';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    repoUrl: 'https://github.com/project1',
    stars: 100,
    tags: ['React', 'TypeScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    repoUrl: 'https://github.com/project2',
    stars: 150,
    tags: ['React', 'JavaScript', 'HTML'],
    maintainer: 'Abc',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3',
    repoUrl: 'https://github.com/project3',
    stars: 200,
    tags: ['JavaScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4',
    repoUrl: 'https://github.com/project4',
    stars: 200,
    tags: ['JavaScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Description for Project 5',
    repoUrl: 'https://github.com/project5',
    stars: 100,
    tags: ['React', 'TypeScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Description for Project 6',
    repoUrl: 'https://github.com/project6',
    stars: 150,
    tags: ['React', 'JavaScript', 'HTML'],
    maintainer: 'Abc',
  },
  {
    id: 7,
    title: 'Project 7',
    description: 'Description for Project 7',
    repoUrl: 'https://github.com/project7',
    stars: 200,
    tags: ['JavaScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 8,
    title: 'Project 8',
    description: 'Description for Project 8',
    repoUrl: 'https://github.com/project8',
    stars: 200,
    tags: ['JavaScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 9,
    title: 'Project 9',
    description: 'Description for Project 9',
    repoUrl: 'https://github.com/project9',
    stars: 100,
    tags: ['React', 'TypeScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 10,
    title: 'Project 10',
    description: 'Description for Project 10',
    repoUrl: 'https://github.com/project10',
    stars: 150,
    tags: ['React', 'JavaScript', 'HTML'],
    maintainer: 'Abc',
  },
  {
    id: 11,
    title: 'Project 11',
    description: 'Description for Project 11',
    repoUrl: 'https://github.com/project11',
    stars: 200,
    tags: ['JavaScript', 'CSS'],
    maintainer: 'Abc',
  },
  {
    id: 12,
    title: 'Project 12',
    description: 'Description for Project 12',
    repoUrl: 'https://github.com/project12',
    stars: 200,
    tags: ['JavaScript', 'CSS'],
    maintainer: 'Abc',
  },
];

const ProjectsPage: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleFilterChange = (selectedFilters: string[]) => {
    if (selectedFilters.length === 0) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) => project.tags.some((tag) => selectedFilters.includes(tag)));
      setFilteredProjects(filtered);
    }
  };

  return (
    <ProjectsContainer>
      <ProjectsHeader>Our Projects</ProjectsHeader>
      <FiltersContainer>
        <Filters onFilterChange={handleFilterChange} />
      </FiltersContainer>
      <ProjectsList>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  padding: 25rem;

  ${media('<=tablet')} {
    padding: 1rem;
  }

  ${media('<=phone')} {
    padding: 0.5rem;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectsHeader = styled.h2`
  font-size: 3.5rem;
  padding-top: 20px;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  padding-bottom: 20px;
`;

export default ProjectsPage;
