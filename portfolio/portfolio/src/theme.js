import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#f0efef",
    fontColor: "#000"
};

export const darkTheme = {
    body: "#272121",
    fontColor: "#FFA069"
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
  }
  * {
    color: ${props => props.theme.fontColor};
  }
  a {
    color: ${props => props.theme.fontColor};
  }
  Link {
    color: ${props => props.theme.fontColor};
  }
`