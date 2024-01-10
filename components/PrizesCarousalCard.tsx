import styled from 'styled-components'

interface SliderProps {
  data: {
    title: string,
    benefits: string[]
  };
}

export default function PrizesCarousalCard({ data }: SliderProps) {
  return (
    <CarousalCard>
      <p style={{ color: 'rgb(var(--yellow))', fontSize: '2.6rem' }}>{data.title}</p>
      {data.benefits.map((item, idx) => {
        return (
          <p key={idx} style={{ fontSize: '1.8rem' }}><span></span>{item}</p>
        )
      })}
    </CarousalCard>
  )

}

const CarousalCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10rem 0rem;
    gap: 4rem;
    font-size: 1.5rem;
    font-weight: 100;
    border-radius: 2rem;
    background: rgba(var(--cardBackground), 0.8);
    color: rgb(var(--textSecondary));
    height: 65dvh;

    @media screen and (max-width:810px)and (min-width:428px){
    margin-top: 1rem;
    width: 80vw;
  }
  @media screen and (max-width:429px)and (min-width:376px){
    height: 60dvh;
    width: 85vw;
    padding: 3rem 3rem;
  }
  @media screen and (max-width:375px){
    height: 70dvh;
    width: 85vw;
    padding: 3rem 3rem;
  }
`;