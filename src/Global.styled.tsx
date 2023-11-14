import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}


body {
    background-color: #F9F9F9;
}


#root {
  --color-blue: #0F52BA;
  --color-black: #000000;
}

`
