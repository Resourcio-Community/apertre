import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const link = { title: "Lets Go", href: "/gallerypage" }; // Change link to an object instead of an array
    return (
        <Container id="gallery">
            <Text>
                <h1><span style={{ color: 'rgb(var(--yellow))' }}>Gallery</span></h1>
                <p>
                    We have completed 15 days of online hackathon. <br />
                    We have received 100+ projects. We have selected top 10 projects. We have selected top 3 projects
                </p>
                <div>
                    <Linktest {...link} /> {/* Pass link object directly */}
                </div>
            </Text>
            <ImageContainer>
                <Image 
                    src="/prizes/first-icon.svg"
                    alt="First Prize Icon"
                    width={300}
                    height={300}
                />
            </ImageContainer>
        </Container>
    )
}





type LinkProps = {
    title: string;
    href: string;
};

const Linktest: React.FC<LinkProps> = ({ title, href }) => {
    return (
        <div>
            <button type="button" style={{background:"none",outline:"none",border:"none"}}>
                <Link href={href} style={{textDecoration:"none",color:"#fff"}} passHref>{title}</Link>
            </button>
        </div>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position:relative;
`;

const Text = styled.div`
    width: 50%;
    font-size: 1.5vw;
`;

const Button = styled.button`
    /* Add your button styles here */
`;

const ImageContainer = styled.div`
    background-color: blue;
`;

export default Gallery;
