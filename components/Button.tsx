import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border: none;
  background: rgb(var(--primary));
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 1.75rem 2.25rem;
  font-size: 1.5rem;
  font-family: var(--font);
  font-weight: bold;
  border: 2px solid rgb(var(--primary));
  border-radius: 0.8rem;
  transition: background 250ms ease-in;
  backface-visibility: hidden;
  cursor: pointer;
  z-index: 999;

  span {
    margin-left: 2rem;
  }

  &:hover {
    background: transparent;
    border: 2px solid rgb(var(--primary));
  }

  &:disabled {
    cursor: wait;
    opacity: 0.9;
  }
`;

export default Button;
