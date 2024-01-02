import styled from 'styled-components';
import { Award } from 'models/award.model';

interface SliderProps {
  awards: Award[];
}

export default function SliderComponent({ awards }: SliderProps) {
  return (
    <CarouselContainer>
      
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 70%;
  margin: auto;
`;
