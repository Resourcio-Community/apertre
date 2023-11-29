import styled from 'styled-components';
import { media } from 'utils/media';
import ProjectsView from 'views/ProjectPage/Project';
const projects = () => {
  return (
    <ProjectsView/>
  )
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 30vh;
  font-size: 4rem;

  ${media('<=tablet')} {
    font-size: 3rem;
  }
`;

export default projects