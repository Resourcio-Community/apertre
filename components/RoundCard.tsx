import NextImage from 'next/image';
import styled from 'styled-components';

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
      {images.map((image, index) => (
        <NextImage key={index} src={image.imageUrl} width={image.width} height={image.height} alt={title || ''} />
      ))}
      <Title>{title}</Title>
      <Description style={{ color: 'black' }}>{description}</Description>
    </Card>
  );
}

const getCardStyle = (priority: number) => {
  switch (priority) {
    case 1: // Diamond
      return `
        width: 100%;
      `;
    case 2: // Gold
      return `
        width: 80%;
      `;
    case 3: // Silver
      return `
        width: 100%;
        height: 80%;
      `;
    case 4: // Certificate
      return `
        width: 100%;
        height: auto;
      `;
    case 5: // Gift
      return `
        width: 80%;
        height: 150%;
        
      `;
    default:
      return '';
  }
};

const Card = styled.div<{ priority: number }>`
  display: flex;
  padding: 1rem;
  background: white;
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fbce1f;
  border-radius: 15px;
  font-size: 1.6rem;
  margin: 0 200px; 

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${(props) => getCardStyle(props.priority)}

  @media (max-width: 768px) {
    margin: 0 20px;
  }

  ${({ priority }) =>
    priority === 4 &&
    `
    margin-top: -80px; 
  `}
  ${({ priority }) =>
    priority === 3 &&
    `
    margin-bottom: -20px; 
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
