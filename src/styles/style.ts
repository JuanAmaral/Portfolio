import styled from 'styled-components';
import { Menu} from '@styled-icons/boxicons-regular/Menu';
import {ConnectWithoutContact} from '@styled-icons/material-twotone/ConnectWithoutContact';
import {TargetArrow} from '@styled-icons/fluentui-system-regular/TargetArrow';
import {CodeBlock} from '@styled-icons/boxicons-regular/CodeBlock';
import {ApprovalApp} from '@styled-icons/fluentui-system-filled/ApprovalApp';
import {Home} from '@styled-icons/heroicons-solid/Home'
import {Users} from '@styled-icons/heroicons-solid/Users'
import{Folders} from '@styled-icons/remix-fill/Folders'

//divs
export const Container = styled.div`
    background: #1f1a27;
    height: 550vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    z-index: -1;
    
`;
export const NavBar = styled.div`
    width:  90%;
    height: 5rem;
    display:flex;
    background: transparent;
    justify-content: space-between;
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
    width: 100%;
    padding:1rem;
    height: 5rem;
`;
export const NameTittle = styled.h2`
    font-size: 1.9rem;
    color:white;
    margin-left: 0.5rem;
`;
export const SubTittle = styled.h2`
    font-size: 1.5rem;
    color:white;
    margin:0;
    margin-bottom: 3rem;
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
`;
export const TittleName = styled(Tittle)`
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
`;

export const ContainerImage = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 18rem;
    img {
    border-radius: 5%;
    }
  
`;
export const ContainerBox = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    object-fit: cover;
    grid-gap: 1rem;
    
`;
export const BoxInfo = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #261e33;
    border-radius: 10px;
    height: 15rem;
    width: 100%;
    border-radius: 5%;  
`;
export const TextBox = styled.p`
    color: white;
    font-size: 1.5rem;
`;
export const ContainerImages = styled.section`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    object-fit: cover;
    img {
    border-radius: 5%;
    }
`;
export const FloatingBar = styled.div`
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
    
    
`;

//Icons
export const IconConnectWithoutContact = styled(ConnectWithoutContact)`
    width: 5rem;
    color: white;
`;
export const IconTargetArrow = styled(TargetArrow)`
    width:5rem;
    color: white;
`;
export const IconCodeBlock = styled(CodeBlock)`
    width:5rem;
    color: white;
`;
export const IconApprovalApp = styled(ApprovalApp)`
    width:5rem;
    color: white;
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
