import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #120f3a;
  
`

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 11px calc(5rem + 40px);
  padding-bottom: 44px;
  margin-bottom: 33px;

  @media screen and (${(props) => props.theme.breaks.portable}) {
    flex-direction: column;
    padding: 0px;
    padding-bottom: 80px;
  }
`

export const GameContainer = styled.div`
  flex: 1;
  align-self: center;
  justify-content: center;
  display: flex;
  @media screen and (${(props) => props.theme.breaks.portable}) {
    flex-direction: column;
    align-self: stretch;
  }
`

export const GameContent = styled.div`
  align-self: center;
  flex-grow: 4;
  display: grid;
  padding: 16px 55px;
  grid-template-columns: repeat(3, auto) / 1fr minmax(180px, 1fr) 1fr;
  align-items: start;
  row-gap: 10px;
  justify-items: center;
  background: #3760a7;
  border-radius: 10px;
  border: 1px solid white;
  max-width: 620px;
  
  @media screen and (${(props) => props.theme.breaks.portable}) {
    gap: 0px 10px;
    max-width: unset;
    border-radius: 0px;
    border-left: none;
    border-right: none;
    grid-template-columns: repeat(4, minmax(100px, 1fr)) / 1fr 50px;
    padding: 30px 18vw;
    align-self: stretch;
  }
  
  @media screen and (min-width: 520px) {
    padding: 30px 23px;
    flex-grow: 3;
  }
  @media screen and (min-width: 820px) {
    padding: 30px 46px;
  }
  @media screen and (max-width: 520px) {
    padding: 30px 23px;
  }
  
  @media screen and (${({ theme }) => theme.breaks.iPad}) {
    grid-template-columns: repeat(3, auto) / 1fr minmax(10rem, 1fr) 1fr;
    max-width: 45rem;
    row-gap: 0.675rem;
    border-radius: 1rem;
    border-width: 2px;
  }
`

export const ContentGame = styled.div<{ disappear?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 125px;
  
  &:nth-of-type(1) {
    grid-area: 1 / 1;
    & > div > .card-header::after {
      content: '1';
    }
  }
  &:nth-of-type(2) {
    grid-area: 2 / 1;
    & > div > .card-header::after {
      content: '2';
    }
  }
  &:nth-of-type(3) {
    grid-area: 1 / 3;
    & > div > .card-header::after {
      content: '3';
    }
  }
  &:nth-of-type(4) {
    grid-area: 2 / 3;
    & > div > span::after {
      content: '4';
    }
  }

  @media screen and (${(props) => props.theme.breaks.portable}) {
    /* align-items: flex-end; */
    &:nth-of-type(1) {
      grid-area: 1 / 2;
    }
    &:nth-of-type(2) {
      grid-area: 2 / 2;
    }
    &:nth-of-type(3) {
      grid-area: 3 / 2;
    }
    &:nth-of-type(4) {
      grid-area: 4 / 2;
    }
  }

  @media screen and (${({ theme }) => theme.breaks.iPad}) {
    min-width: 8rem;
  }
`
