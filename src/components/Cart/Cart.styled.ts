import styled from 'styled-components'

export const CartWrapper = styled.div`
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #000000;
    margin-bottom: .5rem;
  
    img {
        width: 5rem;
        padding: .2rem;
        border-radius: 5px;

        @media (max-width: 520px) {
            width: 3rem;
        }
    }

    h2 {
     width: 113px;
     display: flex;
     justify-content: center;
     font-size: 13px;
    font-weight: 400;

    @media (max-width: 520px) {
        font-size: 10px;
    }

    }
`

export const CartQtd = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 7px;
        font-weight: 400;
    }

    div{
        display: flex;
        gap: 4px;
        border-radius: 4px;
        border: 0.3px solid #BFBFBF;
        background: #FFF;

        p {
            font-size: 10px;
            display: flex;
            align-items: center;
        }

        button:nth-child(1) {
            border: none;
            border-right: 1px solid #BFBFBF;
            cursor: pointer;
            padding: 4px;
            background-color: transparent;
        }

        button:nth-child(3) {
            border: none;
            border-left: 1px solid #BFBFBF;
            cursor: pointer;
            padding: 4px;
            background-color: transparent;
        }
    }
`

export const CartPrice = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #000000;
    border-radius: 5px;
    padding: .2rem;

    @media (max-width: 520px) {
        font-size: 12px;
    }
`

export const CartClose = styled.i`
    position: absolute;
    right: -5px;
    top: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px; 
    background-color: #000000;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;

    svg {
        display: flex;
        width: 16px;
    }
`