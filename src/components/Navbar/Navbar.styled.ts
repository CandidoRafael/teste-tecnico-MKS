import { styled } from 'styled-components'

export const Nav = styled.nav`
    background-color: var(--color-blue);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.h1`
    font-size: 40px;
    font-style: normal;
    margin-left: 3.2rem;
    font-weight: 600;
    padding: 1.1rem;
    
    @media (max-width: 520px) {
        margin-left: .5rem;
    }

    span {
        margin-left: 5px;
        font-size: 20px;
        font-weight: 300;
    }

`

export const Cart = styled.div`
    display: flex;
    gap: .7rem;
    border-radius: 8px;
    padding: .5rem 1.1rem;
    margin-right: 3rem;
    background-color: #fff;
    color: #000000;
    
    svg {
        cursor: pointer;
    }

    span {
       font-size: 18px;
       font-weight: 700;
    }
`