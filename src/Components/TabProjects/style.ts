import styled from 'styled-components';
import Image from 'next/image'


export const ContainerImages = styled.section`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    object-fit: cover;
    img {
    border-radius: 5%;
    }
`;
export const ContainerExpandProjet = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

//Image
export const ImageProject = styled(Image)`
    width:100%;
    object-fit:'contain';
`;
export const ExpandProjet = styled.div<{expand: boolean}>`
    display:flex;
    flex-direction: column;
    width: 95%;
    padding: 0.5rem 0rem 0rem 0.5rem ;
    border-radius: 0px 0px 20px 20px;
    margin-top:-1rem;
    background: #261e33;
    display : ${props => props.expand?  'flex' :  'none'};
`;
export const TittleProject = styled.h1`
    font-size: 1.8rem;
    color:black;
    wrap: wrap;
    color: white;
    text-align: justify;
    align-self:center;
`;
export const TextProject = styled(TittleProject)`
    font-size: 1.3rem;   
    width: 90%;
    line-height: 1.3;
`;
export const ButtonLink = styled.button`
    width: 80%;
    height: 3rem;
    font-size: 1.45rem;
    margin-bottom: 1rem;
    align-self: center;
    border-radius: 10px;
    transition: 0.5s;
    font-weight: 700;
    background: #5f1af0;
    color:white;
    border:none;
    :hover {
        background:  white url(https://i.postimg.cc/FzBWFtKM/pixel2.png); // 360px x 1080px
        transition-delay: 0.8s;
        background-size: 180px;
        animation: animate 0.8s steps(8) forwards;
        color: black;
    }
    :last-of-type {
        :hover {
        color: white;
        background: #5f1af0 url(https://i.postimg.cc/FzBWFtKM/pixel2.png); // 360px x 1080px
        }
    }
    @keyframes animate {
    0% {
        background-position-y: 0;
    }
    100% {
        background-position-y: -480px;
    }
    
}
`;

