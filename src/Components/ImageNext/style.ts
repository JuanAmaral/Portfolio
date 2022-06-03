import styled from 'styled-components';

export const DivNextImage = styled.div<{width: string , height: string}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    @media (min-width: 1024px) {
        width: 30rem;
        height: 30rem;
    }
`;