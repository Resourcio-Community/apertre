import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from './Container';
import PrizesCarousalCard from './PrizesCarousalCard';

//Other prizes
const otherPrizes = [
    {
        title: 'Top 10 Participants',
        benefits: [
            'Cool T-Shirt',
            'Stickers and Swag Kits',
            'Digital Certificate',
            'Social shout out',
            'Digital subscription'
        ],
    },
    // {
    //     title: 'Top 20 Particioants',
    //     benefits: [
    //         'Stickers and Swag Kits',
    //         'Digital Certificate',
    //         'Social shout out',
    //         'Digital subscription'
    // ],
    // },
    {
        title: 'For All Participants(merged at least 1 successful PR)',
        benefits: [
            'Digital Certificate',
            'Ebook',
            'Free digital resources'
        ],
    },
    {
        title: 'Top Female Participant',
        benefits: [
            'Cool T-shirt',
            'Swags & Stickers',
            'Social shout out',
            'Digital certificate'
        ],
    }
]



export default function PrizesCarousal() {
    return (
        <Carousal>
            <Swiper
                spaceBetween={15}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={true}
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
            >
                {otherPrizes.map((item) => {
                    return (
                        <SwiperSlide key={item.title}>
                            <PrizesCarousalCard data={item} />
                        </SwiperSlide>
                    )
                })
                }


            </Swiper>
        </Carousal>
    )

}
const Carousal = styled(Container)`
  width:80dvw;
  height:fit-content;
  margin-top: 5rem;
  padding: 0rem;
  @media screen and (max-width:810px)and (min-width:428px){
    margin-top: 1rem;
    width: 80vw;
  }
  @media screen and (max-width:429px){
    margin-top: 3rem;
    width: 85vw;
    padding: 3rem 0rem;
  }

`;