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
        <CustomImage key={idx} src={image.imageUrl} width={image.width} height={image.height} alt={title || ''} />
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
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(2px);
  box-shadow: 0 5px 10px 14px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(209, 213, 219, 0.3);
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
  color: #746f6f;
  filter: brightness(0.1);
  opacity: 0.9;
`;

const Description = styled.div`
  opacity: 0.8;
  font-size: 1.8rem;
`;


const CustomImage = styled(NextImage)`
  // width: auto;
  // height: auto;
`