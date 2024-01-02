import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Award {
  id: number;
  title: string;
  image: string;
}

interface SliderProps {
  awards: Award[];
}

const CarouselContainer = styled.div`
  width: 50%;
  margin: auto;
`;

const AwardItem = styled.div`
  text-align: center;
  border: none;
`;

const AwardImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 5px;
`;

const SliderComponent: React.FC<SliderProps> = ({ awards }) => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev">Previous</div>,
    nextArrow: <div className="slick-next">Next</div>,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <CarouselContainer>
      <Slider ref={sliderRef} {...settings}>
        {awards.map((award) => (
          <AwardItem key={award.id}>
            <AwardImage src={award.image} alt={award.title} />
            <h3>{award.title}</h3>
          </AwardItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default SliderComponent;
