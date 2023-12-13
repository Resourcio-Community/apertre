import { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

interface LoaderProps {
    width?: number;
    height?: number;
}

export default function Loader({ width, height }: PropsWithChildren<LoaderProps>) {
    return (
        <ImgContainer src='/static/assets/rocket.svg' alt="rocket" width={width || 120} height={height || 120} />
    )
}


const animate = keyframes`
    0% {
        transform: translate(0, 0);
    }
    50%{
        transform: translate(0.5rem, -1.5rem);
    }
    100%{
        transform: translate(0, 0);
    }
}
`

const ImgContainer = styled.img`
    animation: ${animate} 2s linear infinite;
`

