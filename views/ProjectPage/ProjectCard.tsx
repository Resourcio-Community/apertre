import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import ProjectDetailsModal from './ProjectDetailsModal';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    repoUrl: string;
    stars: number;
    tags: string[];
    maintainer: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
  };

  return (
    <CardContainer>
      <CardContent>
        <CardTitleContrainer>
          <CardTitle>{project.title}</CardTitle>
          <ProjectMaintainer>by {project.maintainer}</ProjectMaintainer>
        </CardTitleContrainer>
        <CardTagsContainer>
          <CardTags>
            {project.tags.map((tag, index) => (
              <TechnologyTag key={index}>{tag}</TechnologyTag>
            ))}
          </CardTags>
        </CardTagsContainer>
        <DetailsButton onClick={toggleDetailsModal}>Details</DetailsButton>
      </CardContent>
      <ProjectDetailsModal isOpen={isDetailsModalOpen} onRequestClose={toggleDetailsModal} project={project} />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  box-shadow: 0 0 20px rgba(251, 206, 31, 0.5);
  border: 2px solid rgba(251, 206, 31, 1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 40px rgba(251, 206, 31, 0.8);
    transform: scale(1.05);
  }

  ${media('<=tablet')} {
    height: 250px;
  }

  ${media('<=phone')} {
    height: 200px;
  }
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardTitleContrainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fbce1f;
`;

const CardDescription = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: rgba(var(--primary), 0.9);
`;

const CardTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
  border-radius: 15px;
`;

const TechnologyTag = styled.span`
  background-color: rgba(251, 206, 31, 0.2);
  color: rgba(251, 206, 31, 1);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 1.6rem;
`;

const DetailsButton = styled.button`
  background-color: rgba(22, 115, 255, 1);
  color: white;
  padding: 8px 20px;
  border: none;
  font-weight: 700;
  border-radius: 20px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #040301;
    border-color: rgba(22, 115, 255, 0.2);
    color: white;
    box-shadow: 0px 0px 10px rgba(22, 115, 255, 0.8);
  }
`;

const ProjectDetails = styled.div`
  background-color: rgba(251, 206, 31, 0.1);
  color: rgba(251, 206, 31, 1);
  padding: 8px;
  border-radius: 0 0 12px 12px;
  margin-top: 8px;
  font-size: 1.6rem;
`;
const ProjectMaintainer = styled.div`
  margin-top: 1px;
  color: rgba(var(--text));
  font-size: 1.4rem;
`;

export default ProjectCard;
