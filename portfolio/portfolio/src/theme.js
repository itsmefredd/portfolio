import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#f0efef",
    fontColor: "#000"
};

export const darkTheme = {
    body: "#212529",
    fontColor: "#C0C0C0",
    keyWordColor: "#E5A5FF"
};

export const GlobalStyle = createGlobalStyle`

  .header {
    border-bottom: 1px solid ${props => props.theme.fontColor};
  }
  .footer {
    border-top: 1px solid ${props => props.theme.fontColor};
  }
  .home-link {
    color: ${props => props.theme.fontColor}
  }


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
  .text-scale {
    color: ${props => props.theme.fontColor};
  }
  .location-link {
    color: ${props => props.theme.fontColor};
  }
  .detailed-timeline-link {
    border: 0.25rem dotted ${props => props.theme.keyWordColor};
  }

  .vertical-timeline-element--work > * > * {
    color: black;
  }

  @keyframes text-alt {
    0% {color: ${props => props.theme.fontColor};}
    100% {color: ${props => props.theme.keyWordColor};}
  }

`