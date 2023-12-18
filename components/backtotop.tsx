import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    visible: boolean;
}

const Button = styled.button<ButtonProps>`
    position: fixed;
    bottom: 20px;
    right: 10px;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    background-color: black;
    border: none;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    padding: 9px;
    cursor: pointer;
`;


const BackToTopButton: React.FC = () => {
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
      <FontAwesomeIcon icon={faArrowUp} style={{ color: 'white' }}/>
    </Button>
  );
};

export default BackToTopButton;
