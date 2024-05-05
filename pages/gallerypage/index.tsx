// pages/gallery.tsx

import React from 'react';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Card from '../../components/BasicCard'
import styled from 'styled-components';

type Project = {
    key: number;
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
    buttonHref: string;

}

const dummyData: Project[] = [
    {
      key: 1,
      title: "Day 1",
      description:"",
      imageUrl: "/images/day1.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days1"
    },
    {
      key: 2,
      title: "Day 2 ",
      description:" ",
      imageUrl: "/images/day2.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days2"
    },
    {
      key: 3,
      title: "Day 3 ",
      description:" ",
      imageUrl: "/images/day3.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days3"
    },
    {
      key: 4,
      title: "Day 4 ",
      description:" ",
      imageUrl: "/images/day4.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days4"
    },
    {
      key: 5,
      title: "Day 5 ",
      description:"",
      imageUrl: "/images/day5.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days5"
    },
    {
      key: 6,
      title: "Day 6 ",
      description:" ",
      imageUrl: "/images/day6.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days6"
    },
    {
      key: 7,
      title: "Day 7 ",
      description:"",
      imageUrl: "/images/day7.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days7"
    },
    {
      key: 8,
      title: "Day 8 ",
      description:" ",
      imageUrl: "/images/day8.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days8"
    },
    {
      key: 9,
      title: "Day 9 ",
      description:"",
      imageUrl: "/images/day9.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days9"
    },
    {
      key: 10,
      title: "Day 10 ",
      description:" ",
      imageUrl: "/images/day10.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days10"
    },
    {
      key: 11,
      title: "Day 11 ",
      description:" ",
      imageUrl: "/images/day11.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days11"
    },
    {
      key: 12,
      title: "Day 12 ",
      description:" ",
      imageUrl: "/images/day12.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days12"
    },
    {
      key: 13,
      title: "Day 13 ",
      description:" ",
      imageUrl: "/images/day13.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days13"
    },
    {
      key: 14,
      title: "Day 14 ",
      description:"",
      imageUrl: "/images/day14.jpg",
      buttonText: "View Memory",
      buttonHref: "gallerypage/days14"
    },
    {
      key: 15,
      title: "Day 15 ",
      description:" ",
      imageUrl: "/images/day15.jpg",
      buttonText: "View Memory",
      buttonHref: `gallerypage/days15`
    },
  ];
  


  const GalleryPage: React.FC = () => {
    return (
        <GalleryContainer>
            <H1>First Day</H1>
            <CardsContainer>
                <GalleryCards projects={ZeroSection} />
            </CardsContainer>
            <H1>Second Day</H1>
            <CardsContainer>
                <GalleryCards projects={firstSection} />
            </CardsContainer>
            <H1></H1>
            <CardsContainer>
                <GalleryCards projects={secondSection} />
            </CardsContainer>
            <H1>Third</H1>
            <CardsContainer>
                <GalleryCards projects={thirdSection} />
            </CardsContainer>
            <H1>Last Day</H1>
            <CardsContainer>
                <GalleryCards projects={fourthSection} />
            </CardsContainer>
        </GalleryContainer>
    );
};



const GalleryCards: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <>
            {projects.map((project) => (
                <Card
                    key={project.key}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    buttonText={project.buttonText}
                    buttonhref={project.buttonHref}
                />
            ))}
        </>
    );
};

const H1 = styled.h1`
    color: rgb(var(--yellow));
    font-size: 6rem;
`;

const GalleryContainer = styled.div`
  max-width: 220rem;
  margin: 0 auto;
  padding: 2rem;
  // text-align: center;
`;

const GalCards = styled.div`
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Two columns */
    align-items: center;
    justify-content: center;
    grid-gap: 10rem;
    grid-center: center;
    align-items: center; /* Align items to center vertically */
    gap: 20px;
    margin-bottom: 10rem;
`;

export default GalleryPage;

const ZeroSection = dummyData.filter(project => project.key === 1);
const firstSection = dummyData.filter(project => project.key>1 && project.key <= 3);
const secondSection = dummyData.filter(project => project.key > 3 && project.key <= 7);
const thirdSection = dummyData.filter(project => project.key > 7 && project.key <= 13);
const fourthSection = dummyData.filter(project => project.key === 15);