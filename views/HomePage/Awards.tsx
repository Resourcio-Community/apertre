import SliderComponent from 'components/Slider';
import { Award } from 'models/award.model';

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

export default function Awards() {
  return (
    <div>
      <SliderComponent awards={sampleAwards} />
    </div>
  );
};
