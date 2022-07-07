import styled from 'styled-components';
import {CloseCircleOutline} from '@styled-icons/evaicons-outline/CloseCircleOutline'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline'


export const Container = styled.div`
    
    width: 80%;
    left: 0;
    display:flex;
    background: linear-gradient(#343255,#1d1c2f);
    position: absolute;
    z-index: 99;
    border-radius: 10px;
    outline: 2px white solid;
    align-items: center;
    flex-direction: column;
    left: 10%;    
`
export const ContainerInside = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1rem 0rem 1rem 0rem;

`;

export const Text = styled.h3`
    width: 100%;
    font-size: 1.7rem;
    color: white;
    width: 80%;
    text-align: center;
    justify-content: center;
    margin: 1rem 0rem 1rem 0rem;
    display:none;
    @media (max-width: 375px) {
      width: 100%;
    }
`
export const responsiveBox = styled.div`
    width: 100%;
    @media (max-width: 1024px) {
      width: 100%;
    }

`;
export const TextReponsive = styled(Text)`
    text-align: center;
    width: 100%;
    display: none;
    @media (min-width: 1024px) {
        display: flex;
    }
`;
export const TextInside = styled.h3`
    margin-top: 2rem;
    text-align: center;
    margin: 4rem;
    font-size: 1.4rem;
    color: white;
    
    @media (min-width:1024px) {
        flex-direction: row-reverse;    
        width: 80%;
    }
    
`
export const Box = styled.div`
    width: 100%;
    
`;
export const IconCloseCircleOutline = styled(CloseCircleOutline)`
    width: 3rem;
    height: 3rem;
    min-height: 3rem;
    max-height: 3rem;
    color: white;
    border-radius: 50%;
    align-self: flex-start;
    position:absolute;
    cursor: pointer;
`;

export const ContainerMac = styled.div`
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    z-Index: 1;
    width: 50%;
    min-height: 10rem;
    max-height: 5rem;
    min-width: 5rem;
    max-width: 30rem;
    @media (min-width: 1024px) {
        max-width: 18rem;
        margin-top: 10rem;
        display: flex;
        justify-content: flex-start;
    }
    
`;
export const ContainerIphone = styled.div`
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    z-Index: 1;
    margin-top: 0;
    width: 46%;
    min-height: 10rem;
    max-height: 5rem;
    min-width: 5rem;
    max-width: 18rem;
    margin-top: 10rem;
    @media (min-width: 375px) {
        margin-top:  0rem;
    }
    @media (min-width: 425px) {
        margin-top:  0rem;
    }
    @media (min-width: 768px) {
        margin-top:  10rem;
    }
`;

export const ContainerImages = styled.div`
    width: 50%;
    min-width: 10rem;
    min-height: 5rem;
    max-width: 25rem;
    max-height: 15rem;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerScreen = styled.div<{displayPhone:boolean}>`
    position: absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 50%;
    min-height: 5rem;
    max-height: 10rem;
    min-width: 3rem;
    max-width: ${props => props.displayPhone? '17.2rem' : '24rem'};
    z-Index: 0;
    @media (min-width: 375px) {
        margin-top: ${props => props.displayPhone? '0rem' : '-0.5rem'};
        max-width: ${props => props.displayPhone? '17.2rem' : '24rem'};
        min-width: ${props => props.displayPhone? '9rem' : '5rem'};
        width: ${props => props.displayPhone? '30%' : '40%'};
    }
    @media (min-width: 425px) {
        margin-top: ${props => props.displayPhone? '0rem' : '-0.5rem'};
        width: ${props => props.displayPhone? '50%' : '40%'};
        min-width: ${props => props.displayPhone? '5rem' : '5rem'};
        max-width: ${props => props.displayPhone? '10rem' : '24rem'};
    }
    @media (min-width: 768px) {
        margin-top: ${props => props.displayPhone? '10rem' : '-0.5rem'};
        width: ${props => props.displayPhone? '50%' : '40%'};
        min-width: ${props => props.displayPhone? '5rem' : '5rem'};
        max-width: ${props => props.displayPhone? '17rem' : '24rem'};
    }
    @media (min-width: 1024px) {
        margin-top: ${props => props.displayPhone? '10.8rem' : '12rem'};
        max-width: ${props => props.displayPhone? '17.2rem' : '15rem'};
        min-width: ${props => props.displayPhone? '5rem' : '5rem'};
    }
    img {
            border-radius:  ${props => props.displayPhone? '100px' : '70px'};
            @media (min-width: 375px) {
                border-radius:  ${props => props.displayPhone? '100px' : '0px'};
            }
            @media (min-width: 425px) {
                margin-top: ${props => props.displayPhone? '10rem' : '-0.5rem'};
                width: ${props => props.displayPhone? '50%' : '40%'};
            }
            @media (min-width: 1024px) {
                border-radius:  ${props => props.displayPhone? '100px' : '80px'};
            }
        }
`;

export const ContainerIcons = styled.div`
    display:flex;
    cursor: pointer;
`;
export const IconArrowIosBackOutline = styled(ArrowIosBackOutline)`
    width: 5rem;
    color: white;
    z-Index: 1;
`;
export const IconArrowIosBackOutlinePurple = styled(ArrowIosBackOutline)`
    width: 5rem;
    color: #5f1af0;
    margin-top: 0.4rem;
    position:absolute;
`;
export const IconArrowIosBackOutlinePurpleInvert = styled(IconArrowIosBackOutlinePurple)`
    transform: scaleX(-1);
`;

export const IconArrowIosBackOutlineInvert = styled(IconArrowIosBackOutline)`
   transform: scaleX(-1);
  
`;
export const ContainerSlider = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top:5rem;
    margin-bottom: 2rem;
`;

export const changeDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width:1024px) {
        flex-direction: row-reverse;    
    }
    

`;
