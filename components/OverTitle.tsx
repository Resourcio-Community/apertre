import styled from 'styled-components';
import { media } from 'utils/media';

const OverTitle = styled.span`
  display: block;
  &::before {
    font-size: 2rem;
    position: relative;
    bottom: -0.1em;
    content: '';
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    line-height: 0;
    margin-right: 1em;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  line-height: 0;
  text-transform: uppercase;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

export default OverTitle;
