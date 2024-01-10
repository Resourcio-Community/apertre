import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/media'
interface SliderProps {
    data:{title:string,benefits:string[]};
  }

function PrizesCarousalCard({data}:SliderProps) {
    return(
        <CarousalCard>
            <p style={{color: 'rgb(var(--yellow))',fontSize:'2.6rem'}}>{data.title}</p>
            {data.benefits.map((item)=>{
                return(
                    <p style={{fontSize:'1.8rem'}}><span></span>{item}</p>
                )
            })}
        </CarousalCard>
    )
  
}

export default PrizesCarousalCard

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
/*     
    h4{
        font-weight: 100;
        font-size: 5rem;
        display: flex;
        flex-direction: column;
    } */
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