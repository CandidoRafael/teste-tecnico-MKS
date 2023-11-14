import { styled } from 'styled-components'

type SidebarWrapperProps = {
  isopen: string | undefined
}

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
  position: fixed;
  top: 0;
  right: ${({ isopen }) => (isopen ? '0' : '-446px')};
  width: 440px;
  height: 100%;
  background-color: var(--color-blue);
  color: #fff;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  transition: right 0.3s ease-in-out;

  @media (max-width: 520px) {
    right: ${({ isopen }) => (isopen ? '0' : '-246px')};
    width: 240px;
  }

  h1 {
    font-size: 27px;
    padding: 5px;
    margin-top: 1rem;
    margin-left: 1.1rem;
    display: flex;
    flex-direction: column;
    height: 56px;
    font-style: normal;
    font-weight: 700;

    @media (max-width: 520px) {
      font-size: 1.3rem;
    }
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  margin-top: 1rem;
  margin-right: .3rem;
  top: 10px;
  display: flex;
  right: 10px;
  background-color: #444;
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
`;

export const CartTable = styled.div`
  margin-top: 2rem;
  height: 40rem;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: 520px) {
    padding: 5px;
  }
`

export const CartTotal = styled.div`
  position: absolute;
  margin-bottom: .5rem;
  bottom: -10px;
  width: 90%;
  `

export const CartResults = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;

    font-size: 28px;
    font-style: normal;
    font-weight: 700;

    @media (max-width: 520px) {
      font-size: 1.2rem;
    }
`

export const CartFinish = styled.div`
  width: 486px;

  @media (max-width: 520px) {
    width: 320px;
  }
  
  button {
    width: 100%;
    background-color: #000000;
    color: #fff;
    cursor: pointer;
    border: none;
    height: 97px;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;

    @media (max-width: 520px) {
      font-size: 1.2rem;
      width: 80%;
      text-align: center;
    }
  }
`