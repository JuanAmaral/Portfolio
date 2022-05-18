import styled from 'styled-components';


export const StyledButton = styled.button`
  padding: 0.7rem 1rem;
  min-width: 3rem;
  border-radius: 5px;
  font-weight: bold;
  z-index: 0;
  outline: none;
  border: none;
  transition: 0.42s;
  color: white;
  background: #5f1af0;
  :hover {
    background: #711aff;
  }
  &:disabled {
    pointer-events: none;
    background-color: gray;
  }
`;
