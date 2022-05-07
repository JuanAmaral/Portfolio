import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Anton', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, header, footer {
    min-width: 350px;
    
    @media screen and (min-width: 760px) and (max-width: 840px) {
      min-width: 800px;
      
    }
  }

  body > small {
    font-family: Inter;
    position: fixed;
    color: white;
    letter-spacing: 0em;
    bottom: 0px;
    right: 0px;
    padding: .3rem;
  }

  :root {
     
     @media screen and (max-width: 950px) {
      font-size: 10px;
    }
     @media screen and (max-width: 1004px) {
      font-size: 12px;
    }
     @media screen and (min-width: 1004px) {
      font-size: 14px;
    }
    @media screen and (min-width: 1320px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 17px;
    }
    @media screen and (min-width: 1640px) {
      font-size: 24px;
    }
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.75);
  }
`
