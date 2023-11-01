import NextImage from 'next/image';
import styled from 'styled-components';

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
  text-align: center;
  width: 100%;
  border: 1px solid #fbce1f;
  border-radius: 50%;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: #fbce1f;
`;

const Description = styled.div`
  opacity: 0.6;
`;
