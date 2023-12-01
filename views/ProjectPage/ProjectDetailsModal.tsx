import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  project: {
    title: string;
    description: string;
    repoUrl: string;
  };
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  isOpen,
  onRequestClose,
  project,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '12px',
          width: '80%',
          maxWidth: '600px',
          margin: 'auto',
          maxHeight: '40vh',
          border: '2px solid rgba(var(--primary))',
        },
      }}
    >
      <StyledProjectDetails>
        <CloseIcon onClick={onRequestClose}>
          <FiX />
        </CloseIcon>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <GitHubLink href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          Repository Link
        </GitHubLink>
      </StyledProjectDetails>
    </ReactModal>
  );
};

const StyledProjectDetails = styled.div`
  padding: 20px;
  font-size: 1.6rem;
`;

const CloseIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
`;
const GitHubLink = styled.a`
  color: #fbce1f;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  margin-top: 10px;

  &:hover {
    color: rgba(var(--primary), 0.9);
  }
`;

export default ProjectDetailsModal;
