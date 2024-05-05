import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
    return (
        <Container id="gallery">
            <Text>
                <h1><span style={{ color: 'rgb(var(--yellow))' }}>Gallery</span></h1>
                <p>
                    We have completed 15 days of online hackathon. <br />
                    We have received 100+ projects. We have selected top 10 projects. We have selected top 3 projects
                </p>
                <CustomLink href="/gallery" passHref>Lets Go</CustomLink>
            </Text>
            <Image 
                src="/prizes/first-icon.svg"
                alt="First Prize Icon"
                width={300}
                height={300}
            />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
`;

const CustomLink = styled(Link)`
    &:hover{
        color: rgb(var(--yellow));
    }
`

const Text = styled.div`
    width: 50%;
    font-size: 1.5vw;
`;
