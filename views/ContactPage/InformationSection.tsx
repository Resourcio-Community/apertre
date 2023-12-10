import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ color: 'rgb(var(--yellow))' }}> resourciocommunity22@gmail.com</span>
        <span style={{ color: 'rgb(var(--yellow))' }}> gdsc.aot@gmail.com</span>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
