import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#f0efef",
    fontColor: "#000",
    keyWordFunction: "text-alt"
};

export const darkTheme = {
    body: "#212529",
    fontColor: "#C0C0C0",
    keyWordColor: "#E5A5FF",
    keyWordFunction: "text-alt-dark",
    projectBoxBackground: "#1E2327",
    projectBoxBorder: "#232F3E"
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
  .project-box {
    background-color: ${props => props.theme.projectBoxBackground};
    border: ${props => props.theme.projectBoxBorder} solid 1px;
  }

  .vertical-timeline-element--work > * > * {
    color: black;
  }
  .vertical-timeline-element-date {
    color: ${props => props.theme.fontColor};
  }

  .text-scale1 {
    animation-name: ${props => props.theme.keyWordFunction};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 1s;
}
.text-scale2 {
  animation-name: ${props => props.theme.keyWordFunction};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 2s;
}
.text-scale3 {
    animation-name: ${props => props.theme.keyWordFunction};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 3s;
  }
  .text-scale4 {
    animation-name: ${props => props.theme.keyWordFunction};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 4s;
  }
  @keyframes text-alt-dark {
    0% {color: ${props => props.theme.fontColor};}
    100% {color: #E5A5FF;}
  }

`