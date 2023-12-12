import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from 'config/axiosInstance';
import { ProjectsData } from 'models/project.model';
import { media } from 'utils/media';
//import Filters from 'views/ProjectPage/Filters';
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
        <ProjectsHeader>
          <Heading>Our <span style={{ color: 'rgb(var(--yellow))' }}>Projects</span></Heading>
          <Event>APERTRE <span style={{ color: 'rgb(var(--yellow))' }}>&apos;24</span></Event>
        </ProjectsHeader>
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

const WhiteBackgroundContainer = styled.div`
  padding: 5rem; 
  background: #000;
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding: 5rem 0;

  ${media('<=tablet')} {
    padding: 5rem 1.5rem;
  }
`;

const ProjectsHeader = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3.5rem;
  padding: 0 10rem; 

  ${media('<=tablet')} {
    padding: 0 1rem; 
    gap: 1.5rem;
  }

  ${media('<=phone')} {
    padding: 0 0.5rem; 
  }
`;

const Heading = styled.span`
  font-size: 6.4rem;

  ${media('<=tablet')} {
    font-size: 4.3rem;
  }
`;
const Event = styled.span`
  font-size: 4rem;

  ${media('<=tablet')} {
    font-size: 3rem;
  }
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