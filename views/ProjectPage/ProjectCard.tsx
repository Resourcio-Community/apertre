import { useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import ProjectDetailsModal from './ProjectDetailsModal';
import { ProjectsData } from 'models/project.model';
import { PiLinkedinLogo } from "react-icons/pi";

interface ProjectCardProps {
  project: ProjectsData
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
  };

  return (
    <CardContainer>
      <CardContent>
        <CardTitle>{project.projectName}</CardTitle>
        <ProjectMaintainer>
          <By>by</By> &nbsp;
          <A href={project.linkedIn} target='_blank'>{project.maintainer}<PiLinkedinLogo style={{ fontSize: '2rem' }} /></A>
        </ProjectMaintainer>
        <CardTags>
          {project.techStack.map((tag, index) => (
            <TechnologyTag key={index}>{tag}</TechnologyTag>
          ))}
        </CardTags>
        <DetailsButton onClick={toggleDetailsModal}>Details</DetailsButton>
      </CardContent>
      <ProjectDetailsModal
        isOpen={isDetailsModalOpen}
        onRequestClose={toggleDetailsModal}
        project={project}
      />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0.88;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px rgba(251, 206, 31, 0.8); 
    transform: scale(1.05);
  }
  margin-bottom: 25px;

  ${media('<=tablet')} {
    height: 250px;
  }

  ${media('<=phone')} {
    height: 200px;
  }
`;

const CardContent = styled.div`
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardTitle = styled.h3`
  font-size: 2.1rem;
  margin-bottom: 1rem;
  color: rgb(var(--yellow));

  ${media('<=tablet')} {
    font-size: 2.4rem;
  }
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
  padding: 1rem 0;
`;

const TechnologyTag = styled.span`
  background: rgba(var(--yellow), 0.9);
  color: black; 
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 1.3rem;
`;

const DetailsButton = styled.button`
  background-color: rgba(var(--primary)); 
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 20px; 
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid rgba(var(--primary));
  }
`;

const ProjectMaintainer = styled.div`
  color: rgba(var(--text));
  font-size: 1.4rem;
  padding: 1rem 0;

  ${media('<=tablet')} {
    padding: 2rem 0;
  }
`;

const A = styled.a`
  color: rgb(var(--yellow));
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: rgb(var(--primary));
    transition: color 0.2s;
  }
`

const By = styled.span`
  font-size: 1.2rem;

  ${media('<=tablet')} {
    font-size: 1.4rem;
  }
`
