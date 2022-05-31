import styled from 'styled-components';
import Image from 'next/image'




export const ContainerGeral = styled.div`
    width: 100%;
    background: #261e33;
    border-radius: 10px;
`;

export const  ContainerImages = styled.div`
    width: 100%;
    transform: translate3d(0, 0, 100px);
    /* :hover {
        color: yellow;
    } */
    
    :hover {
        margin-left: -8px;
        transform: scale(0.9);
        transition-duration: 1s;
    }
    :hover .uma {
        z-index: 5;
        transform: perspective(500px) rotateY(-40deg) rotateX(40deg) translateY(0rem);
        transition-duration: 1s;

    }
    :hover .duas {
        z-index: 3;
        transform: perspective(500px) rotateY(-30deg) rotateX(40deg) translateY(-0.5rem) translateX(-1.5rem);
        transition-duration: 1.2s;
    }
     :hover .tres {
        z-index: 2;
        transform: perspective(500px) rotateY(-30deg) rotateX(40deg) translateY(-0.5rem) translateX(-1.5rem);
        transition-duration: 1.6s;
    }
    :hover .quatro {
        z-index: 1;
        transform: perspective(200px) rotateY(-20deg) rotateX(40deg) translateY(-0.5rem) translateX(-1.5rem);
        transition-duration: 1.8s;
        
    }
    /* :hover .uma {
        z-index: 5;
        transform: perspective(500px) rotateX(30deg) rotateY(-15deg);

    }
    :hover .duas {
        z-index: 3;

        transform: perspective(400px) rotateX(30deg) rotateY(-10deg);
    }
     :hover .tres {
        z-index: 2;
        transform: perspective(400px) rotateX(30deg) rotateY(-5deg);
    }
    :hover .quatro {
        z-index: 1;
        transform: perspective(400px) rotateX(40deg) rotateY(0deg);
    } */

`;


export const Image1 = styled(Image)`
    perspective: 1000px;
    translate: 2s;
    position: absolute;

`;
export const Image2 = styled(Image1)`
    perspective: 1000px;

`;
export const Image3 = styled(Image1)`
    perspective: 1000px;
    animation: anim2 1s infinite;
    
    @keyframes anim2{
        from {
            opacity: 1;
            filter: brightness(0.9);
        }
        50% {
            filter: brightness(1.15);

        }
        to {
            opacity: 1;
            filter: brightness(0.9);
        }
    }

`;
export const Image4 = styled(Image1)`
    perspective: 1000px;
    animation: anim1 3s infinite;
    transform : translateY(-2rem);
    
    @keyframes anim1{
        from {
            transform : translateY(-0rem);
        }
        50% {
            transform : translateY(-2rem);
        }
        to {
            transform : translateY(-0rem);
        }
    }


`;