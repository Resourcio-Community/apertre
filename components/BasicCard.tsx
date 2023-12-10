import NextImage from 'next/image';
import { BsBookHalf } from 'react-icons/bs';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';

interface BasicCardProps {
  title: string;
  description: string;
  manual?: string;
  imageUrl: string;
  buttonText: string;
  buttonhref: string;
}

export default function BasicCard({ title, description, imageUrl, buttonText, buttonhref, manual }: BasicCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={128} height={128} alt={title} style={{ borderRadius: '45% 45% 60% 85%' }} />
      <Div>
        <Title>{title}</Title>
        {manual && <A href={manual} target='_blank'><BsBookHalf /></A>}
      </Div>
      <Description>{description}</Description>
      <RegisterButton>
        <A href={buttonhref} target='_blank'>{buttonText}</A>
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
  border: 1px solid rgb(var(--yellow));
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
  color: rgb(var(--yellow));

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

const A = styled.a`
  text-decoration: none; 
  color: white;
  z-index: 99;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`