import NextImage from 'next/image';
import styled from 'styled-components';
import { media } from 'utils/media';

interface Image {
  imageUrl: string;
  width: number;
  height: number;
}

interface RoundCardProps {
  title?: string;
  description: string;
  images: Image[];
  priority: number;
}

export default function RoundCard({ title, description, images, priority }: RoundCardProps) {
  return (
    <Card priority={priority}>
      {images.map((image, idx) => (
        <NextImage key={idx} src={image.imageUrl} width={image.width} height={image.height} alt={title || ''} />
      ))}
      {title && <Title>{title}</Title>}
      <Description style={{ color: 'black' }}>{description}</Description>
    </Card>
  );
}

const getCardStyle = (priority: number) => {
  switch (priority) {
    case 1: // Diamond
    case 2: // Gold
    case 3: // Silver
    case 5: // Gift
      return `
        width: 90%;
        height:38dvh;
      `;

    case 4: // Certificate
      return `
        position:relative;
        margin-top:1rem;
        width: 90%;
        height: 25dvh;
      `;

    default:
      return '';
  }
};

const Card = styled.div<{ priority: number }>`
  display: flex;
  padding: 2rem;
  background: white;
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px double rgba(var(--yellow));
  border-radius: 15px;
  font-size: 1.6rem;
  margin: 0 200px;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${(props) => getCardStyle(props.priority)}

  ${media('<=tablet')} {
    margin: 0 20px;
  }


  ${({ priority }) =>
    priority === 4 &&
    `
    margin-top: -2rem; 
  `}
  ${({ priority }) =>
    priority === 3 &&
    `
    margin-bottom: -1rem; 
  `}
`;

const Title = styled.div`
  font-size: 2rem;
  color: #fbce1f;
  opacity: 0.9;
`;

const Description = styled.div`
  opacity: 0.8;
  font-size: 1.8rem;
`;
