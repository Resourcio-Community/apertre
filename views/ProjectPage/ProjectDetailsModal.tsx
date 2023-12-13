import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { FiX, FiGithub } from 'react-icons/fi';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  project: {
    projectName: string;
    projectDesc: string;
    projectLink: string;
  };
}

export default function ProjectDetailsModal({ isOpen, onRequestClose, project }: PropsWithChildren<ProjectDetailsModalProps>) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          backgroundColor: 'rgba(223, 229, 226)',
          color: 'black',
          borderRadius: '12px',
          width: '80%',
          maxWidth: '420px',
          margin: 'auto',
          maxHeight: '40vh',
          border: '3px solid rgb(var(--yellow))',
          overflowY: 'auto',
        },
      }}
    >
      <StyledProjectDetails>
        <CloseIcon onClick={onRequestClose}>
          <FiX style={{ color: 'red', fontSize: '2rem'}} />
        </CloseIcon>
        <h2>{project.projectName}</h2>
        <p>{project.projectDesc}</p>
        <GitHubLink href={project.projectLink} target="_blank" rel="noopener noreferrer">
          <FiGithub style={{ marginRight: '8px', color: 'black' }} />
          GitHub
        </GitHubLink>
      </StyledProjectDetails>
    </ReactModal>
  );
};

const StyledProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-size: 1.6rem;
  padding: 2rem;
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
  color: rgba(var(--primary), 0.9);
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  
  &:hover {
    color: black;
  }
`;
