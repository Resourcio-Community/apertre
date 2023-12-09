import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from 'views/ProjectPage/ProjectCard';
import Filters from 'views/ProjectPage/Filters';
import { media } from 'utils/media';
const projectsData = [
  {
    id: 1,
    title: 'Opensource Guide',
    description: 'Beginner Friendly Open Source Teaching Project.',
    repoUrl: 'https://github.com/debarshee2004/opensource_guide',
    stars: 100,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 2,
    title: 'Metaverse',
    description:
      'Hello Sir/mam , Here is My repo  "METAVERSE"🚀 Welcome to our GitHub repository, officially accepted & have participated  for CODE COLLAB CARNIVAL 23 (OSEN) 👾 & Hacktoberfest 2023! Explore a dynamic collection of front-end projects, powered by HTML, CSS, JavaScript, and React. Join our community to contribute your creations 🎨, add features 🛠️, or squash bugs 🐛 in existing projects.The repo already includes more than 100+ issues , 100+PRs & have 16 contributors 20+ new front-end projects in my repo.I also want to contribute my repo in this  biggest APERTRE open-source programme.',
    repoUrl: 'https://github.com/apu52/METAVERSE',
    stars: 150,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Arpan Chowdhury',
  },
  {
    id: 3,
    title: 'Pomodoro Extension',
    description:
      'This is a Chrome extension that uses the Pomodoro Technique to help users increase productivity through deep work. It has a website blocking feature to minimize distractions. This project is open to contributors of all levels, from beginners to experienced developers. It is a great opportunity to learn how to build Chrome extensions, use the Chrome storage system, and create small projects with unique CSS styling.',
    repoUrl: 'https://github.com/trishit78/Pomodoro-Extension',
    stars: 200,
    tags: ['React', 'Material UI', 'Bootstrap'],
    maintainer: 'Trishit Bhowmik',
  },
  {
    id: 4,
    title: 'Tools for WhatsApp',
    description:
      'Our project, the Tools for WhatsApp is designed to make WhatsApp more enjoyable. It lets users download status, create stylish text, and add fun pranks to their chats. We made this app to fulfill these needs and enhance the WhatsApp experience (App is not complete yet)',
    repoUrl: 'https://github.com/anshu-choubey/Tools-for-WhatsApp',
    stars: 200,
    tags: ['Java', 'Kotlin', 'Material Design 2'],
    maintainer: 'Anshu Choubey',
  },
  {
    id: 5,
    title: 'Web Chat App',
    description: 'Browser based Chat App.',
    repoUrl: 'https://github.com/debarshee2004/web_chat_app',
    stars: 100,
    tags: ['NextJS'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 6,
    title: 'Email Web App',
    description: 'Browser based Emailing App.',
    repoUrl: 'https://github.com/debarshee2004/email_webapp',
    stars: 150,
    tags: ['React Native'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 7,
    title: 'HR Management App',
    description: 'Android and IOS Mobile App for HR.',
    repoUrl: 'https://github.com/project7',
    stars: 200,
    tags: ['React'],
    maintainer: 'Debarshee Chakraborty',
  },
  {
    id: 8,
    title: 'Messi Mania',
    description: 'A simple frontend basis fan made web-page of LIONEL MESSI.',
    repoUrl: 'https://github.com/Soumyajit2825/MESSI_MANIA',
    stars: 200,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Soumyajit Mondal',
  },
  {
    id: 9,
    title: 'To Do List',
    description: 'A simple to-do-list page using html, css and javascript.',
    repoUrl: 'https://github.com/Soumyajit2825/TO-DO-LIST',
    stars: 100,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Soumyajit Mondal',
  },
  {
    id: 10,
    title: 'Canteen Website',
    description:
      'An website & an flutter App which shows the service provided by Our college it has both website & an App, the reason why it has both because website to get quick glance on it & an App if you want to visit canteen on daily basis, people losses website link quickly on the other hand App installed on mobile phone is easy to find & easy to use, this contains mainly various services & its prize of those services.',
    repoUrl: 'https://github.com/Shinjan-saha/Canteen-Website',
    stars: 150,
    tags: ['JavaScript', 'HTML', 'CSS', 'Flutter'],
    maintainer: 'Shinjan Saha',
  },
  {
    id: 11,
    title: 'Supnits Classes',
    description:
      'It is a generalised website for an educational institute comprising of different articles, sections, courses, mentors and testimonials provided by the institute. It can be used for multiple purposes by changing the fields as and when required. Contributions are welcome! ❣️',
    repoUrl: 'https://github.com/Anushka-Bhowmick/Supnits-Classes',
    stars: 200,
    tags: ['React', 'SaSS'],
    maintainer: 'Anushka Bhowmick',
  },
  {
    id: 12,
    title: 'VoyageVista',
    description:
      'VoyageVista is a demonstrative international travel-booking website which vows to facilitate journeys, enabling seamless bookings that are truly international, without the weight of extra charges.',
    repoUrl: 'https://github.com/eccentriccoder01/VoyageVista',
    stars: 200,
    tags: ['React', 'NodeJS', 'Express', 'MongoDB'],
    maintainer: 'Sagnik Chakraborty',
  },
  {
    id: 13,
    title: 'JGEC Previous Year question papers',
    description:
      'The project is a website built by front-end technology. This website provides previous year examination question paper of Jalpaiguri Govt. Engineering College and also other study material to the students. I have made this website because some times student do not get previous year question paper for practice when they have required this, so to overcome this situation i made this website.Student can easily download study materials and practice set from this website.There are many pages in the website that has no footer part and some other design and functionality can be added in this site, so for that reason i need some great contribution from other developer.Thank You.',
    repoUrl: 'https://github.com/rko0211/jgec-previous-year-question-paper',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    maintainer: 'Prakash Mondal',
  },
  {
    id: 14,
    title: 'Photogram',
    description: 'Instagram clone.',
    repoUrl: 'https://github.com/AyishikD/Photogram',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'HTML'],
    maintainer: 'Ayishik Das',
  },
  {
    id: 15,
    title: 'Disney Plus Clone',
    description: 'Disney Plus Clone.',
    repoUrl: 'https://github.com/AyishikD/disney-plus-clone',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'HTML'],
    maintainer: 'Ayishik Das',
  },
  {
    id: 16,
    title: 'Face Recognition Attendance Master',
    description:
      'A "Face Recognition Attendance Master" is a technological solution that utilizes facial recognition to automate attendance tracking. It captures and matches individuals faces to record their presence, offers real-time monitoring, generates attendance reports, and integrates with other systems. This system prioritizes accuracy and security while ensuring compliance with privacy regulations and ease of use.',
    repoUrl: 'https://github.com/YuweAEC/face-Recognition-Attendance-master',
    stars: 200,
    tags: ['Numpy', 'pandas', 'python', 'opencv', 'ML'],
    maintainer: 'Yuvraj Singh',
  },
  {
    id: 17,
    title: 'Note App',
    description: 'It is a note taking app made in flutter.',
    repoUrl: 'https://github.com/NabajitBhadury/Note_App.git',
    stars: 200,
    tags: ['Flutter'],
    maintainer: 'Nabajit Bhadury',
  },
  {
    id: 18,
    title: 'SCCSE Project',
    description: 'It is a HTML, CSS website for beginners.',
    repoUrl: 'https://github.com/NabajitBhadury/SCCSE_project.git',
    stars: 200,
    tags: ['HTML', 'CSS'],
    maintainer: 'Nabajit Bhadury',
  },
  {
    id: 19,
    title: 'Weather Detector',
    description:
      'Here a server is made on django which depicts the weather of a place when the place name is given along with the country code.',
    repoUrl: 'https://github.com/NabajitBhadury/Weather-Detector.git',
    stars: 200,
    tags: ['Django'],
    maintainer: 'Nabajit Bhadury',
  },
  {
    id: 20,
    title: 'Blog Website',
    description: 'A blog website made on django.',
    repoUrl: 'https://github.com/NabajitBhadury/Blog-Project.git',
    stars: 200,
    tags: ['Django'],
    maintainer: 'Nabajit Bhadury',
  },
  {
    id: 21,
    title: 'DigiConvert Calculator',
    description:
      'It is a web based calculator that simultaneously converts and calculates operations between 4 bases of digital data in Decimal , Binary , Hexadecimal and Octal within a single calculator and single input prompt.The inspiration to make this project is because of its a hassle for us to convert every base of a number manually with formulas , there exists calculators for normal operations but why not for digital conversions and operations so this calculator .... probably it will help lazy students like me to do stuffs.',
    repoUrl: 'https://github.com/Rohan-450/Digiconvert-Calculator',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'HTML'],
    maintainer: 'Rohan Mitra',
  },
  {
    id: 22,
    title: 'Limetta',
    description:
      'Elevate your financial management with Limetta. Our user-friendly Next.js app simplifies expense tracking, offers multiple account management, easy money transfers, and efficient dues tracking.',
    repoUrl: 'https://github.com/Sukrittt/Limetta',
    stars: 200,
    tags: ['NextJS', 'TypeScript', 'Tailwind', 'NextAuth', 'tRPC', 'Drizzle'],
    maintainer: 'Sukrit Saha',
  },
  {
    id: 23,
    title: 'SayMusic',
    description:
      'It is a cloning application of spotify which contains top 10 best songs of Arijit Singh.I use audio API in javascript code to play music. I am a great fan of Arijit Singh and a music lover, so it tends me to make this.',
    repoUrl: 'https://github.com/Corrupteddisk/SpotifycloneWeb.git',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'HTML'],
    maintainer: 'Sayan Mukherjee',
  },
  {
    id: 24,
    title: 'UTuberrr',
    description:
      'We provide a platform where you(Youtuber) and your service provider(Editor) where both can login. We(our server) will have the access of your Youtube channel(Which is safe by legal bounds). Now you do not need to give the access of your channel to your service provider(editor). He can directly upload the video in your Youtube channel using Title, Tags, Description etc. through our website. Our server will upload the video in your channel using YoutubeAPI. So it is safe!',
    repoUrl: 'https://github.com/Sayan67/Youtube-uploader.git',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'HTML', 'NodeJS', 'jQuery', 'Express', 'MongoDB'],
    maintainer: 'Sayan Das',
  },
  {
    id: 25,
    title: 'too-good-clone',
    description: 'I have tried to learn and implement animations using GSAP.',
    repoUrl: 'https://github.com/ASHISH26940/toogoodto',
    stars: 200,
    tags: ['JavaScript', 'CSS', 'HTML', 'GSAP'],
    maintainer: 'Ashish Gupta',
  },
  {
    id: 26,
    title: 'Netflix-Sign-In-Page',
    description: 'Sign In page for Netflix web streaming services.',
    repoUrl: 'https://github.com/rohit32999/Netflix-Sign-In-Page',
    stars: 200,
    tags: ['HTML', 'CSS'],
    maintainer: 'Rohit Chakrabarti',
  },
  {
    id: 27,
    title: 'Socialite',
    description:
      'Minimalistc Social media webapp that includes features such as user authentication (JWT) ,Post creation with file uploads (using react-dropzone), post liking and commenting, adding friends, and real-time notifications (usingsocket.io).The application utilizes Redux Toolkit to manage API data and handle payloads. Continuously developing additional features to improve the user experience',
    repoUrl: 'https://github.com/arnab2001/socialite',
    stars: 200,
    tags: ['React', 'NodeJS', 'Express', 'MongoDB', 'Material UI'],
    maintainer: 'Arnab Chatterjee',
  },
  {
    id: 28,
    title: 'SpringCrud',
    description: 'Basic Crud application.',
    repoUrl: 'https://github.com/bishakhne0gi/Spring-Crud',
    stars: 200,
    tags: ['SpringBoot', 'React', 'MySQL'],
    maintainer: 'Bishakh Neogi',
  },
  {
    id: 29,
    title: 'cubeXtimer',
    description: 'An easy-to-use cube timer, to time your day-to-day cube solves.',
    repoUrl: 'https://github.com/darkard2003/cubeXtimerKotlin.git',
    stars: 200,
    tags: ['Kotlin', 'Jetpack Compose'],
    maintainer: 'Kaushik Chowdhury',
  },
  {
    id: 30,
    title: 'Amazon clone',
    description: 'This is a clone of amazon.com without any use of javascript. So make it better.',
    repoUrl: 'https://github.com/Pritanshu69/Amazon_homepage-.git',
    stars: 200,
    tags: ['HTML', 'CSS'],
    maintainer: 'Pritanshu Samanta',
  },
  {
    id: 31,
    title: 'Checklist',
    description:'Checklist is a one stop solution for all the students who have their exams in soon or the people preparing for interviews of different tech stacks, to revisit all the concepts within that particularly domain in a very short period of time,in longer run project is looking forward to develop a community of people to interact with each other one same platform as well.',
    repoUrl: 'https://github.com/UjjwalSharma01/checklist',
    stars: 200,
    tags: ['HTML', 'CSS', 'JavaScript'],
    maintainer: 'Ujjwal Sharma',
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
    <ProjectsWrapper>
      <WhiteBackgroundContainer>
        <ProjectsHeader>
          <Heading>
            Our <span style={{ color: '#fbce1f' }}>Projects</span>{' '}
          </Heading>
          <Heading3>
            APERTRE <span style={{ color: '#fbce1f' }}>'24</span>
          </Heading3>
        </ProjectsHeader>
        <Filters onFilterChange={handleFilterChange} />
      </WhiteBackgroundContainer>
      <DarkerBackgroundContainer>
        <ProjectsList>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsList>
      </DarkerBackgroundContainer>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div``;

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

export default ProjectsPage;
