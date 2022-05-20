import styled from 'styled-components';
import { Menu} from '@styled-icons/boxicons-regular/Menu';
import {ConnectWithoutContact} from '@styled-icons/material-twotone/ConnectWithoutContact';
import {TargetArrow} from '@styled-icons/fluentui-system-regular/TargetArrow';
import {CodeBlock} from '@styled-icons/boxicons-regular/CodeBlock';
import {ApprovalApp} from '@styled-icons/fluentui-system-filled/ApprovalApp';
export const IconConnectWithoutContact = styled(ConnectWithoutContact)`
    width:5rem;
    height: 5rem;
    color: white;
`;
export const IconTargetArrow = styled(TargetArrow)`
    width:5rem;
    height: 5rem;
    color: white;
`;
export const IconCodeBlock = styled(CodeBlock)`
    width:5rem;
    height: 5rem;
    color: white;
`;
export const IconApprovalApp = styled(ApprovalApp)`
    width:5rem;
    height: 5rem;
    color: white;
`;

export const Container = styled.div`
    background: #1f1a27;
    height: 400vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    
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
    font-size: 2rem;
    color : ${props => props.color};
`;
export const IconMenu = styled(Menu)`
    height: 2rem;
    width:2rem;
    color: white;
`;
export const ContentBanner = styled.div`
    min-height: 10rem;
    height: 10rem;
    width: 80%;
    //background: #5e18f5;
    padding: 1rem;
    
`;
export const ContentTittle = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    padding:1rem;
`;
export const NameTittle = styled.h2`
    font-size: 1.2rem;
    color:white;
    margin-left: 0.5rem;
`;
export const SubTittle = styled.h2`
    font-size: 1rem;
    color:white;
`;
export const YellowTextBox = styled.div `
    background: #f8d238;
    height: 1.2rem;
    width: 0.3rem;
`;
export const ContainerText = styled.div`
    display: flex;
    align-items: center;
`;
export const TittleName = styled(Tittle)`
    font-size: 2rem;
`;
export const ContainerImage = styled.div`
    margin-top: 2rem;
    width: 18rem;
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
    background: #261e33;
    border-radius: 10px;
    height: 15rem;
    width: 15rem;
    border-radius: 5%;
    
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
