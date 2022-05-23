import styled from 'styled-components';
import {ConnectWithoutContact} from '@styled-icons/material-twotone/ConnectWithoutContact';
import {TargetArrow} from '@styled-icons/fluentui-system-regular/TargetArrow';
import {CodeBlock} from '@styled-icons/boxicons-regular/CodeBlock';
import {ApprovalApp} from '@styled-icons/fluentui-system-filled/ApprovalApp';
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