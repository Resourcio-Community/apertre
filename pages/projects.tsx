import styled from 'styled-components';
import { media } from 'utils/media';

const projects = () => {
  return (
    <Div>
      Coming Soon
    </Div>
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