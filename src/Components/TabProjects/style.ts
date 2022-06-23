import styled from 'styled-components';
import Image from 'next/image'
import {Reactjs} from  '@styled-icons/remix-line/Reactjs'
import {Nextdotjs} from  '@styled-icons/simple-icons/Nextdotjs'
import {Wordpress} from  '@styled-icons/boxicons-logos/Wordpress'
import {Unity} from  '@styled-icons/simple-icons/Unity'

export const ContainerImages = styled.section`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    object-fit: cover;
    img {
    border-radius: 5%;
    }
`;

export const BoxInfo = styled.div<{expand? : string}>`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${(props) => props.expand != 'proj2' ? '#261e33' : '#1c1625'};
    border-radius: 10px;
    height: 15rem;
    width: 100%;
    border-radius: 5%;  
    border:  1px transparent solid;
    cursor:pointer;
    :hover {
        border:  1px white solid;
    }
    
`;
export const TextBox = styled.p`
    color: white;
    font-size: 1.5rem;
`;

export const TextBoxInside = styled(TextBox)`
    font-size: 1.2rem;
    text-align: center;
`;
export const ButtonOpenProject = styled.button`
    height: 2rem;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    background: transparent;
    border: 1px solid transparent;
    margin: 0;
    color: #666088;
    cursor:pointer;
    color: white;
    border-bottom: 1px solid #5f1af0;
    :hover{
        color: #5f1af0;
        transition: 1s;
        border-bottom: 1px solid white;
    }
`;


export const IconReactjs = styled(Reactjs)`
    width: 5rem;
    color: white;
`;

export const IconNextdotjs = styled(Nextdotjs)`
    width: 4.5rem;
    color: white;
`;

export const IconWordpress = styled(Wordpress)`
    width: 4.5rem;
    color: white;
`;

export const IconUnity = styled(Unity)`
    width: 4.5rem;
    color: white;
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #261e33;
    width: 100%;
    padding: 0.5rem 0rem 0rem 0.5rem ;
    border-radius: 0px 0px 20px 20px;
    margin-top:-1rem;
    border-radius: 10px;
    height: 15rem;
    width: 100%;
    border-radius: 5%;  
    display : ${props => props.expand?  'flex' :  'none'};
`;

export const ExpandRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    margin: 0rem;
    height: 3rem;
    
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
export const ConteinerExpand = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
   
    @media (max-width: 1024px) {
        flex-direction: column;
    }

`;

