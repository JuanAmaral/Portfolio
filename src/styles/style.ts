import styled from 'styled-components';
import { Menu} from '@styled-icons/boxicons-regular/Menu';
//Icons
import {Home} from '@styled-icons/heroicons-solid/Home'
import {Users} from '@styled-icons/heroicons-solid/Users'
import{Folders} from '@styled-icons/remix-fill/Folders'
import Image from 'next/image'
//divs
export const Container = styled.div`
    background: #1f1a27;
    height: 550vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    z-index: -1;
    @media (min-width: 500px) {
        height: 650vh;
    }
    @media (min-width: 800px) {
        height: 350vh;
    }
    @media (min-width: 1024px) {
        height: 250vh;
    }
    
    
`;
export const NavBar = styled.div`
    width:  85%;
    height: 5rem;
    display:flex;
    background: transparent;
    justify-content: flex-start;
    align-items: center;
    
    
`;
export const Tittle = styled.h1<{color: string}>`
    font-size:  3rem;
    color : ${props => props.color};
    
`;
export const IconMenu = styled(Menu)`
    height: 2rem;
    width:2rem;
    color: white;
`;
export const ContentBanner = styled.div`
    min-height: 10rem;
    height: 5rem;
    width: 80%;
    //background: #5e18f5;
    padding: 1rem;
    
    
`;
export const ContentTittle = styled.div`
    display:flex;
    flex-direction: row;
    width: 22%;
    padding:1rem;
    height: 5rem;
`;

export const YellowTextBox = styled.div `
    background: #f8d238;
    height: 2rem;
    width: 0.4rem;
    
`;
export const ContainerText = styled.div`
    margin-top:1rem;
    height:4rem;
    display: flex;
    align-items: center;
    margin-top:3rem;
    margin-bottom: 1rem;
    
    @media (min-width: 800px) {
        margin-top: 7rem;
    }
`;

export const ContainerImage = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 18rem;
    img {
    border-radius: 5%;
    }
  
`;
export const ImageNext = styled(Image)`
  border-radius: 50%;
`;


export const FloatingBarMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 2.1rem;
    height: 10rem;
    background: linear-gradient( #423459, #0b090f );
    //opacity: 0.7;
    border-radius: 30px;
    padding: 5px;
    z-index: 100;
    margin-bottom: 200%;
    margin-top: 10rem;
    left: 83%;
    //border:  solid rgba(255, 255, 255,.09) 2px;
    @media (min-width: 800px) {
        display:none;
    }
`;
export const MenuTopLandscape = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: end;
    width: 40%;
    height: 5rem;
    padding: 1rem;
    display:none;
    @media (min-width: 800px) {
        display: flex;
        color: white;
    }
`;
export const TextMenuTop = styled.button`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    background: transparent;
    border: 1px solid transparent;
    margin: 0;
    color: #666088;
    font-weight: 800;
    margin-left:1rem;
    cursor:pointer;
    :hover{
        color:white;
        transition: 1s;
        border-bottom: 1px solid #5f1af0;
    }
`;

export const TextCurriculum = styled(TextMenuTop)`
    color: white;
    border-bottom: 1px solid #5f1af0;
    font-size: 1.15rem;
    :hover{
        color: #5f1af0;
        transition: 1s;
        border-bottom: 1px solid white;
    }
`;


export const IconHome = styled(Home)<{active:boolean}>`
    width:1.4rem;
    color: white;
    border:  solid white 2px;
    padding: 0.15rem;
    border-radius: 50%;
    opacity : ${props => props.active?  1 :  0.3};
`;
export const IconUsers = styled(Users)<{active:boolean}>`
    width:1.4rem;
    color: white;
    border:  solid white 2px;
    padding: 0.15rem;
    border-radius: 50%;
    opacity : ${props => props.active?  1 :  0.3};
`;
export const IconFolders = styled(Folders)<{active:boolean}>`
    width:1.4rem;
    color: white;
    border:  solid white 2px;
    padding: 0.15rem;
    border-radius: 50%;
    opacity : ${props => props.active?  1 :  0.3};
`;


//Texts
export const TittleName = styled(Tittle)`
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
    @media (min-width: 800px) {
        display:none;
    }
    
`;
export const TittleNameLandscape = styled(TittleName)`
font-size: 3.5rem;
@media (max-width: 800px) {
        display:none;
    }
 @media (min-width: 800px) {
        display:flex;
}
    
`;
export const NameTittle = styled.h2`
    font-size: 1.9rem;
    color:white;
    margin-left: 0.5rem;
`;
export const SubTittle = styled.h2`
    font-size: 1.5rem;
    color: #666088;
    margin:0;
    margin-bottom: 3rem;
    margin-top: 1rem;

`;

export const ContainerTopBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
@media (min-width: 800px) {
    flex-direction: row;
}
`;
export const StyledButton = styled.button`
  padding: 0.7rem 1rem;
  min-width: 4rem;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  background: #5f1af0;
  font-size: 1.3rem;
  color:white;
  cursor: pointer;
  
`;
