import axiosInstance from 'config/axiosInstance';
import { ProjectsData } from 'models/project.model';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Filters from 'views/ProjectPage/Filters';
import ProjectCard from 'views/ProjectPage/ProjectCard';


export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectsData[]>([]);

  const getRepos = async () => {
    try {
      const { data } = await axiosInstance.get('/repo/getrepos')

      setProjects(data.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <ProjectsWrapper>
      <WhiteBackgroundContainer>
        <ProjectsHeader><Heading>Our <span style={{ color: '#fbce1f' }}>Projects</span> </Heading>
          <Heading3>APERTRE <span style={{ color: '#fbce1f' }}>&apos;24</span></Heading3></ProjectsHeader>
        {/* <Filters onFilterChange={handleFilterChange} /> */}
      </WhiteBackgroundContainer>
      <DarkerBackgroundContainer>
        <ProjectsList>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </ProjectsList>
      </DarkerBackgroundContainer>
    </ProjectsWrapper>
  );
};



const ProjectsWrapper = styled.div`
`;

const ProjectsHeader = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  padding: 0 25rem; 

  ${media('<=tablet')} {
    padding: 0 1rem; 
  }

  ${media('<=phone')} {
    padding: 0 0.5rem; 
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  padding: 6rem; 
  background: #000;
  background-image: url('/static/assets/homeBG.svg');
  background-repeat: "no-repeat",
  background-size: "cover",
  background-position: "center",
  object-fit: "cover",

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const Heading = styled.div`
  font-size: 7rem;
`;
const Heading3 = styled.div`
  font-size: 4rem;
`;



// const handleFilterChange = (selectedFilters: string[]) => {
//   if (selectedFilters.length === 0) {
//     setFilteredProjects(projectsData);
//   } else {
//     const filtered = projectsData.filter((project) =>
//       project.tags.some((tag) => selectedFilters.includes(tag))
//     );
//     setFilteredProjects(filtered);
//   }
// };