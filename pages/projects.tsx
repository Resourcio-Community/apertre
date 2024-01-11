import { Pagination } from '@mui/material';
import Fuse from 'fuse.js';
import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import axiosInstance from 'config/axiosInstance';
import { ProjectsData } from 'models/project.model';
import { media } from 'utils/media';
import Filters from 'views/ProjectPage/Filters';
import ProjectCard from 'views/ProjectPage/ProjectCard';



const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectsWrapper = styled.div`
  width: 100%;
`;

const DarkerBackgroundContainer = styled.div`
  padding: 5rem;
  background: #000;
`;

const WhiteBackgroundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgb(var(--background));
  padding: 5rem 0 14rem 0;

  ${media('<=tablet')} {
    padding: 5rem 0 10rem 0;
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
    gap: 2.6rem;
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

const CustomPagination = styled(Pagination)`
  position: absolute;
  width: 20%;
  bottom: 4rem;
  right: 5rem;

  ${media('<=tablet')} {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & li {
    & button {
      font-size: 1.7rem;
      color: white;
      margin: 0 1rem;

      & svg {
        font-size: 2rem;
      }

      ${media('<=tablet')} {
        margin: 0 0.5rem;
      }
    }
  }

  & .Mui-selected {
    filter: drop-shadow(2px 3px 3px #2cb9a8);
  }
`


export default function ProjectsPage() {
  const [page, setPage] = useState<number>(1);
  const [projects, setProjects] = useState<ProjectsData[]>([]);
  const [tags, setTags] = useState<Array<string>>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectsData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getReposAndTags = async (page: number) => {
    setLoading(true);
    try {
      const limit = 12
      const reposData = axiosInstance.get(`/repo/getrepos?limit=${limit}&page=${page - 1}`);
      const stacksData = axiosInstance.get('/repo/gettags')
      const [{ data: repos }, { data: stacks }] = await Promise.all([reposData, stacksData]);

      setProjects(repos.data);
      setTags(stacks.data);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  }

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    getReposAndTags(page)
  }, [page])

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  const handleFilterChange = (query: string) => {
    const fuse = new Fuse(projects as ProjectsData[], {
      keys: ['techStack'],
      threshold: 0.1,
    });
    const result = fuse.search(query);
    setFilteredProjects(query ? result.map((item) => item.item) : projects);
  };


  return (
    <>
      {loading ? (
        <FullPage>
          <Loader />
        </FullPage>
      ) : (
        <>
          <ProjectsWrapper>
            <DarkerBackgroundContainer>
              <ProjectsHeader>
                <Heading>
                  Our <span style={{ color: 'rgb(var(--yellow))' }}>Projects</span>
                </Heading>
                <Event>
                  APERTRE <span style={{ color: 'rgb(var(--yellow))' }}>&apos;24</span>
                </Event>
              </ProjectsHeader>
              <Filters onFilterChange={handleFilterChange} tags={tags} />
            </DarkerBackgroundContainer>
          </ProjectsWrapper>

          <WhiteBackgroundContainer>
            <ProjectsList>
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </ProjectsList>
            {/* Projects per page 12 */}
            <CustomPagination variant='outlined' color='primary' count={Math.ceil(projects.length / 12)} page={page} onChange={handlePageChange} />
          </WhiteBackgroundContainer>
        </>
      )}
    </>
  );
}
