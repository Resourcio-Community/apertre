import React from 'react';
import Slider from 'components/Slider';
import SectionTitle from 'components/SectionTitle'; 

interface Award {
  id: number;
  title: string;
  image: string;
}

interface AwardsProps {
  awards?: Award[];
}

const Awards: React.FC<AwardsProps> = ({ awards = [] }) => {
  const sampleAwards: Award[] = [
    {
      id: 1,
      title: 'Best Contributor',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Top Mentor',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Code Wizard',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      <SectionTitle style={{ color: 'rgb(var(--yellow))', paddingBottom: '20px' }}>Awards</SectionTitle>
      <Slider awards={awards.length ? awards : sampleAwards} />
    </div>
  );
};

export default Awards;
