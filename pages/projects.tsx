import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from 'views/ProjectPage/ProjectCard';
import Filters from 'views/ProjectPage/Filters'; 
import { media } from 'utils/media';
const projectsData = [
  {
    id: 1,
    title: 'Opensource Guide',
    description: 'Beginner Friendly Open Source Teaching Project',
    repoUrl: 'https://github.com/debarshee2004/opensource_guide',
    stars: 100,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 2,
    title: 'Metaverse',
    description: 'Beginner Friendly Open Source Teaching Project',
    repoUrl: 'https://github.com/apu52/METAVERSE',
    stars: 150,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Arpan Chowdhury',
  },
  {
    id: 3,
    title: 'Pomodoro Extension',
    description: 'This is a Chrome extension that uses the Pomodoro Technique to help users increase productivity through deep work. It has a website blocking feature to minimize distractions. This project is open to contributors of all levels, from beginners to experienced developers. It is a great opportunity to learn how to build Chrome extensions, use the Chrome storage system, and create small projects with unique CSS styling.',
    repoUrl: 'https://github.com/trishit78/Pomodoro-Extension',
    stars: 200,
    tags: ['JavaScript', 'CSS'],
    maintainer: 'Trishit Bhowmik',
  },
  {
    id: 4,
    title: 'Tools for WhatsApp',
    description: 'Our project, the Tools for WhatsApp is designed to make WhatsApp more enjoyable. It lets users download status, create stylish text, and add fun pranks to their chats. We made this app to fulfill these needs and enhance the WhatsApp experience (App is not complete yet)',
    repoUrl: 'https://github.com/anshu-choubey/Tools-for-WhatsApp',
    stars: 200,
    tags: ['Java', 'CSS'],
    maintainer: 'Anshu Choubey',
  },
  {
    id: 5,
    title: 'Web Chat App',
    description: 'Browser based Chat App.',
    repoUrl: 'https://github.com/debarshee2004/web_chat_app',
    stars: 100,
    tags: ['Next', 'TypeScript', 'CSS'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 6,
    title: 'Email Web App',
    description: 'Browser based Emailing App.',
    repoUrl: 'https://github.com/debarshee2004/email_webapp',
    stars: 150,
    tags: ['React', 'JavaScript', 'CSS'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 7,
    title: 'HR Management App',
    description: 'Android and IOS Mobile App for HR.',
    repoUrl: 'https://github.com/project7',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'Java'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 8,
    title: 'Messi Mania',
    description: 'A simple frontend basis fan made web-page of LIONEL MESSI',
    repoUrl: 'https://github.com/Soumyajit2825/MESSI_MANIA',
    stars: 200,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Soumyajit Mondal',
  },
  {
    id: 9,
    title: 'To Do List',
    description: 'A simple to-do-list page using html, css ad javascript',
    repoUrl: 'https://github.com/Soumyajit2825/TO-DO-LIST',
    stars: 100,
    tags: ['HTML', 'CSS', 'JavScript'],
    maintainer: 'Soumyajit Mondal',
  },
  {
    id: 10,
    title: 'Canteen Website',
    description: 'An website & an flutter App which shows the service provided by Our college it has both website & an App, the reason why it has both because website to get quick glance on it & an App if you want to visit canteen on daily basis, people losses website link quickly on the other hand App installed on mobile phone is easy to find & easy to use, this contains mainly various services & its prize of those services ',
    repoUrl: 'https://github.com/Shinjan-saha/Canteen-Website',
    stars: 150,
    tags: ['Java'],
    maintainer: 'Shinjan Saha',
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
      const filtered = projectsData.filter((project) =>
        project.tags.some((tag) => selectedFilters.includes(tag))
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <ProjectsContainer>
      <ProjectsHeader>Our Projects</ProjectsHeader>
      <Filters onFilterChange={handleFilterChange} />
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


const ProjectsHeader = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px; 
`;

export default ProjectsPage;


