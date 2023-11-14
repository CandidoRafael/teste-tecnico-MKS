import { styled } from 'styled-components'

export const HomeProducts = styled.main`
    width: 1000px;
    margin: 3.5rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
    gap: 1rem;

    @media (max-width: 1000px) {
        width: 80%;
    }
`