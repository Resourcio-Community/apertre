import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { productCards1, productCards2 } from 'views/GalleryPage/data';

export default function IDs() {
    const router = useRouter();
    const slug = router.query.id;
    const mergedProductCards = productCards1.concat(productCards2);
    const data = mergedProductCards.filter((data) => data.page === slug);

    return (
        <Container>
            <div style={{ textAlign: "center", color: "rgb(var(--yellow))" }}>
                <HeadText>Gallery</HeadText>
            </div>
            <ImageCard datas={data} />
        </Container>
    );
};

function ImageCard({ datas }: { datas: any[] }) {
    return (
        <CardContainer>
            {datas.map((data: any, index: number) => {
                console.log(data);
                return (
                    <Card key={index}>
                        <Image src={data.mainImage} alt={data.title} width={300} height={200} />
                        {/* <Title>{data.title}</Title>
                        <Text>{data.briefText}</Text>
                        <Button>{data.buttonText}</Button> */}
                    </Card>
                );
            })}
        </CardContainer>
    );
};

const Container = styled.div`
    margin: 20px;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Two columns */
    margin-left:13rem;
    gap: 10rem;
`;

const Card = styled.div`
    /* Add card styles here */
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// const Title = styled.h3`
//     font-size: 1.5rem;
//     margin-bottom: 10px;
// `;

// const Text = styled.p`
//     margin-bottom: 10px;
// `;

// const Button = styled.button`
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     padding: 10px 20px;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//         background-color: #0056b3;
//     }
// `;

const HeadText = styled.h1`
    font-size: 10rem;
    width:
`;
