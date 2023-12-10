import NextImage from 'next/image';
import styled from 'styled-components';
import { media } from 'utils/media';

interface RoundCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function RoundCard({ title, description, imageUrl }: RoundCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={128} height={128} alt={title} />
      <Title>{title}</Title>
      <Description>{description || "\u00A0"}</Description>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid rgb(var(--yellow));
  border-radius: 50%;
  color: rgb(var(--text));
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
  color: rgb(var(--yellow));

  ${media('<=tablet')} {
    font-size: 1.6rem;
  }
`;

const Description = styled.div`
  opacity: 0.6;
`;
