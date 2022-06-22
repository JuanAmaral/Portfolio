import styled , { css } from 'styled-components'
import Image from 'next/image'
 



export const ContainerGeral = styled.div`
    width: 100%;
    background: #261e33;
    border-radius: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 11.3rem;    
    flex-direction: column;
    margin-bottom: 3rem;
`;
export const button = styled.div`
color: white;
width: 60%;
position:relative;
top: 6rem;
text-align:center;
font-size: 1.5rem;
background: #261e33;
border-radius: 5px;
cursor: pointer;
`;

export const Picture = styled.div `
    width: 100%;
    height: 11.3rem;
`;
export const  ContainerImages = styled.div<{press:boolean}>`
    margin-top: -6rem;
    
    width: 100%;
    transform: translate3d(0, 0, 100px);
    /* :hover {
        color: yellow;
    } */
    
    /* ${props => props.press ? `
    
    margin-left: -8px;
    transform: scale(0.9);
    transition-duration: 1s;
    
    ` : 'background: blue;'} */

    ${(props) =>
    props.press
      ? css`
            margin-left: -8px;
            transform: scale(0.9);
            transition-duration: 1s;
        .uma {
            z-index: 5;
            transform: perspective(50rem) rotateY(40deg) rotateX(45deg) translateY(0rem);
            transition-duration: 1s;
        }
        .duas {
            z-index: 3;
            transform: perspective(50rem) rotateY(35deg) rotateX(40deg) translateY(-0.1rem) translateX(1rem);
            transition-duration: 1.2s;
        }
        .tres {
            z-index: 2;
            transform: perspective(80rem) rotateY(45deg) rotateX(40deg) translateY(3.8rem) translateX(-0.5rem);
            transition-duration: 1s;
        }
        .quatro {
            z-index: 1;
            transform: perspective(80rem) rotateY(40deg) rotateX(40deg) translateY(6.5rem) translateX(-1.5rem);
            transition-duration: 1.8s;
                
        }


        :hover{
            margin-left: -8px;
            transform: scale(0.9);
            transition-duration: 1s;
        }
        :hover  .uma {
                z-index: 5;
                transform: perspective(50rem) rotateY(40deg) rotateX(45deg) translateY(0rem);
                transition-duration: 1s;
            }
        :hover   .duas {
                z-index: 3;
                transform: perspective(50rem) rotateY(40deg) rotateX(45deg) translateY(2rem) translateX(-1.3rem) scale(0.9);
                transition-duration: 0.4s;
            }
        :hover   .tres {
                z-index: 2;
                transform: perspective(80rem) rotateY(45deg) rotateX(42deg) translateY(5.2rem) translateX(-3.5rem) scale(0.9);
                transition-duration: 1s;
            }
        :hover   .quatro {
                z-index: 1;
                transform: perspective(60rem) rotateY(30deg) rotateX(38deg) translateY(6.5rem) translateX(-2.2rem) scale(0.9);
                transition-duration: 1.5s;
                    
            }
        



        `
      : css`
        margin-left: 0px;
        transform: scale(1);
        transition-duration: 1s;
            .uma {
                z-index: 5;
                transform: perspective(50rem) rotateY(0deg) rotateX(0deg) translateY(0rem);
                transition-duration: 1s;
            }
            .duas {
                z-index: 3;
                transform: perspective(50rem) rotateY(0deg) rotateX(0deg) translateY(1.7rem) translateX(0rem);
                transition-duration: 1.2s;
            }
            .tres {
                z-index: 2;
                transform: perspective(50rem) rotateY(0deg) rotateX(0deg) translateY(4.1rem) translateX(0rem);
                transition-duration: 1s;
            }
            .quatro {
                z-index: 1;
                transform: perspective(50rem) rotateY(0deg) rotateX(0deg) translateY(7.2rem) translateX(0rem);
                transition-duration: 1.8s;
                    
            }
        `}


   

`;


export const Image1 = styled(Image).attrs({layout: 'responsive'})`
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