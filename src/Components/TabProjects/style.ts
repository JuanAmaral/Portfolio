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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

//Image
export const ImageProject = styled(Image)`
    width:100%;
    object-fit:'contain';
`;
export const ExpandProjet = styled.div`
    display:flex;
    flex-direction: column;
    height: 30rem;
    width: 95%;
    padding: 0.5rem 0rem 0rem 0.5rem ;
    border-radius: 0px 0px 20px 20px;
    margin-top:-1rem;
    background: white;

`;
export const TittleProject = styled.h1`
    font-size: 1.8rem;
    color:black;
    wrap: wrap;
`;
export const TextProject = styled(TittleProject)`
    font-size: 1.3rem;
`;

