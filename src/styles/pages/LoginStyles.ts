import styled from 'styled-components'
import { LogIn } from '@styled-icons/evaicons-solid/LogIn'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 5rem 25vw;
  align-items: center;
  background: #3760a7;
  min-height: 100vh;
  color: white;
  gap: 3rem;

  h1 {
    width: 100%;
    min-width: 180px;
    max-width: 240px;
  }

  @media screen and (${({ theme }) => theme.breaks.portable}) {
    justify-content: center;
  }
`

export const Form = styled.form`
  display: flex;
  gap: 6px;

  * {
    font-family: 'Inter';
  }
`
export const SubmitButton = styled.button`
  min-width: 3rem;
  outline: none;
  padding: 0.36rem 0.6rem;
  border-radius: 5px;
  background: #02031b;
  cursor: pointer;
  color: white;
  align-self: stretch;
  border: none;
  font-weight: bold;
  box-shadow: 0 0 0 1.5px white;
`

export const LoginIcon = styled(LogIn)`

`
