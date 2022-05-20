import styled from 'styled-components';
import {Menu} from '@styled-icons/boxicons-regular/Menu';


interface ExpandSideBarProps{
  expandSideBar: boolean;
}

export const navbar = styled.div`
  background-color: red;
  height: 3rem;
  width: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  color: black;
  justify-content: center;
  position: absolute;
  align-self: flex-end;
  margin-top: 10rem;
  
`;


export const menuBars = styled.span`
  font-size: 2.5rem;
  weight: 2rem;
  min-width: 3rem;
  max-width: 3rem;
  height: 4rem;
  max-height: 4rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
`;

export const navMenu = styled.div`
  background-color: #0d0c1a;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  //left: -100%;
  transition: 850ms;
`;

export const navMenuActive = styled.div<ExpandSideBarProps>`
  display: flex;
  position: absolute;
  flex-direction: column;  
  align-self: flex-start;
  justify-content: flex-start;
  background: #fff;
  min-width: 2rem;
  min-height: 12rem;
  left: 0;
  color: black;
  top: 13rem;
  transform: ${(props) =>
    //props.expandSideBar ? "translateX(80vw)" : "translateX(100vw)"};
    props.expandSideBar ? "translateX(80vw)" : "translateX(100vw)"};
  transition: transform 0.4s ease-out;
  z-index: 999;
  
`;

export const navText = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`;

export const navTextA = styled.span`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
`;


export const navMenuItems = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const navbarToggle = styled.div`
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const button = styled.button`
  background: transparent;
  height: 60px;
  //padding: 1rem 0 0 0;
  transition: 0.2s;
  display: flex;
  align-items: flex-end;
  min-height: 2rem;
  max-width: 4rem;
  min-width: 4rem;
  line-height: 1rem;
  text-align: left;
  
  cursor: pointer;
  padding: 0rem;
  
  outline: none;
  border: none;
  :hover {
    /* opacity: 100; */
    color: blue;
    border-radius: 20px;
    padding-left: 1rem;
    transition: 0.3s;
    cursor: pointer;
  }
  :focus {
    opacity: 0.8;
    border-radius: 20px;
    padding-left: 1rem;
    color: blue;
  }
`;
export const StyleDiv = styled.div`
  display: flex;
  align-items: flex-end;
  
`;

export const text = styled.span`
  margin-left: 16px;
  font-size: 1.2rem;
  flex-wrap: wrap;

  color: gray;
`;
export const icon = styled.span`
  margin-left: 4px;
  font-size: 1.2rem;
  
  /* color: black; */
  svg,
  path,
  circle,
  polyline,
  rect,
  line {
    /* color: black !important; */
  }
  display: flex;
`;
export const MenuIcon = styled(Menu)`
  color: black;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`
