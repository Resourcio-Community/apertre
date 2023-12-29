import styled from 'styled-components';
import { media } from 'utils/media';

const OverTitle = styled.span`
  display: block;
  &::before {
    font-size: 1rem;
    position: relative;
    bottom: -0.1em;
    content: '';
    width: 0.9em;
    height: 0.9em;
    line-height: 0;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  line-height: 0;
  text-transform: uppercase;

  ${media('<=desktop')} {
    line-height: 1.5;
  }

  ${media('<=tablet')} {
    font-size: 1.1rem;
    letter-spacing: 0.001em;
  }
`;

export default OverTitle;
