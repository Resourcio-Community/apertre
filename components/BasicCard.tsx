import NextImage from 'next/image';
import styled from 'styled-components';
import Button from './Button';
import { media } from 'utils/media';

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
      <NextImage src={imageUrl} width={128} height={128} alt={title} style={{ borderRadius: '45% 45% 60% 85%' }} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <RegisterButton>
        <a href={buttonhref} target='_blank' style={{ textDecoration: 'none', color: 'white' }}>{buttonText}</a>
      </RegisterButton>
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
  border-radius: 1rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  ${media('<=tablet')} {
    font-size: 1.4rem;
  }

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: #fbce1f;

  ${media('<=tablet')} {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  font-size: 1.5rem;
  opacity: 0.6;
`;

const RegisterButton = styled(Button)`
  ${media('<=tablet')} {
    padding: 1.7rem 2.2rem;
    font-size: 1.4rem;
  }
`;
