import NextImage from 'next/image';
import styled from 'styled-components';
import Button from './Button';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonhref: string;
}

export default function BasicCard({ title, description, imageUrl, buttonText, buttonhref }: BasicCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={128} height={128} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>
        <a href={buttonhref} target='_blank' style={{ textDecoration: 'none', color: 'white' }}>{buttonText}</a>
      </Button>
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
  border-radius: 0.6rem;
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
