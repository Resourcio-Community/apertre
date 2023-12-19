import { useEffect, useState } from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  visible: boolean;
}

interface LoaderProps {
  width?: number;
  height?: number;
}

const Button = styled.button<ButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 10px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: black;
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  cursor: pointer;
`;

const ImgContainer = styled.img<LoaderProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  transform: rotate(-30deg);
`;

const BackToTopButton: React.FC<PropsWithChildren<LoaderProps>> = ({ width, height }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button visible={isVisible} onClick={scrollToTop}>
      <ImgContainer src='/static/assets/rocket.svg' alt="rocket" width={width || 50} height={height || 50} />
    </Button>
  );
};

export default BackToTopButton;
