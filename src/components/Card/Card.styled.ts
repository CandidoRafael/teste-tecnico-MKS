import { styled  } from 'styled-components'

export const CardContainer = styled.section`
    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const CardImage = styled.img`
    width: 13.2rem;
    height: 220px;
    object-fit: contain;
`

export const CardTitle = styled.article`
    display: flex;
    align-items: flex-start;
    gap: 5px;

    h1 {
        font-size: 16px;
        width: 124px;
        height: 38px;
        font-style: normal;
        font-weight: 400;
    }

    span {
        background-color: #373737;
        color: #fff;
        padding: .3rem;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 700;
    }
`

export const CardDesc = styled.p`
    margin: .4rem 0 .6rem 0;
    font-weight: 300;
    font-size: 10px;
    padding: .5rem;
`

export const CardButton = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    gap: 5px;
    width: 100%;
    border: none;
    background-color: var(--color-blue);
    height: 32px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0 0 8px 8px;
    transition: .3s all linear;

    &:hover {
        background-color: #1e66d3;
    }

    &:disabled {
        cursor: not-allowed;
    }
`