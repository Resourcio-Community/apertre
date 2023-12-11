import NextImage from 'next/image';
import styled from 'styled-components';
import { media } from 'utils/media';

interface RoundCardProps {
  title: string;
  description: string;
  imageUrl: string;
  image:object;
}

export default function RoundCard({ title, description, imageUrl,image }: RoundCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={image.width} height={image.height} alt={title} />
      <Title>{title}</Title>
      <Description>{description || "\u00A0"}</Description>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.9rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #fbce1f;
  border-radius: 50%;
  
  
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    border-radius: 48%;
    font-size: 1.5rem;
    padding: 4rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: #fbce1f;
  text-align:center;
  ${media('<=tablet')} {
    font-size: 1.6rem;
  }
`;

const Description = styled.div`
  opacity: 0.6;
`;
