import styled from 'styled-components';
import {CloseCircleOutline} from '@styled-icons/evaicons-outline/CloseCircleOutline'



export const Container = styled.div`
    height: 80vh;
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