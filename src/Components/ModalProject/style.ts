import styled from 'styled-components';
import {CloseCircleOutline} from '@styled-icons/evaicons-outline/CloseCircleOutline'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline'


export const Container = styled.div`
    
    width: 100%;
    left: 0;
    display:flex;
    background: linear-gradient(#343255,#1d1c2f);
    position: absolute;
    z-index: 99;
    border-radius: 10px;
    outline: 2px white solid;
    align-items: center;
    flex-direction: column;
    margin-top: -20rem;
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
    margin: 1rem 0rem 1rem 0rem;
`
export const TextInside = styled.h3`
    margin: 4rem;
    font-size: 1.4rem;
    color: white;
    width: 90%;
    
`
export const Box = styled.div`
    width: 100%;
    color: red;
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
    z-Index: 1;
    width: 25rem;
    min-height: 16.5rem;
    max-height:16.5rem;
    
`;
export const ContainerScreen = styled.div`
 position: absolute;
    width: 20rem;
    top: 9rem;
    z-Index: 0;
    img {
            border-radius:  70px;
        }
`;
export const ContainerIconsLeft = styled.div`
    display:flex;
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
`;
