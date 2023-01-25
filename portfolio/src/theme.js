import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    primaryBackground: "#f0efef", // light light white
    secondaryBackground: "", // light white
    fontColor: "black", 
	projectBoxBackground: "#f7f2f2", // light baige
    projectBoxBorder: "#FFFFFF", // white
	keyWordColor: "#5CBA82", // dark green


    keyWordFunction: "text-alt",
    // oppositeColor: "black"
};

export const darkTheme = {
    primaryBackground: "#161b22", // dark blue
    secondaryBackground: "#0d1117", // dark dark blue
    fontColor: "#C0C0C0", // light gray
	projectBoxBackground: "#1E2327", // dark grey
    projectBoxBorder: "#232F3E", // navy
    keyWordColor: "#E5A5FF", // light purple





    keyWordFunction: "text-alt-dark",
    // oppositeColor: "white"
};

export const GlobalStyle = createGlobalStyle`

	// Change all font colors
	*{
		transition: all 0.25s linear;
		color: ${props => props.theme.fontColor};
	}

	// Primary Background Changing
	.header, .footer, .body{
		background-color: ${props => props.theme.primaryBackground};
	}

	// Project boxes
	.project-box{
		background-color: ${props => props.theme.projectBoxBackground};
		border: 1px solid ${props => props.theme.projectBoxBorder};
	}

	// Header Body Footer separator colors
	.header, .body{
    	border-bottom: 1px solid ${props => props.theme.fontColor};
  	}

	// Sub section links in My life border
	.detailed-timeline-link {
		border: 0.25rem dotted ${props => props.theme.keyWordColor};
	}

	// My life section key word constant color change
	@keyframes text-alt-dark {
		0% {color: ${props => props.theme.fontColor};}
		100% {color: ${props => props.theme.keyWordColor};;}
	}


  	// .home-link{
    // 	color: ${props => props.theme.fontColor}
  	// }

  	// .main-projects{
    // 	background-color: ${props => props.theme.secondaryBackground};
  	// }
	// body {
	// 	background-color: ${props => props.theme.primaryBackground};
	// }
	// a {
	// 	color: ${props => props.theme.fontColor};
	// }
	// Link {
	// 	color: ${props => props.theme.fontColor};
	// }
	// .text-scale {
	// 	color: ${props => props.theme.fontColor};
	// }
	.location-link {
		color: ${props => props.theme.keyWordColor};
	}

	// .project-box {
	// 	background-color: ${props => props.theme.projectBoxBackground};
	// 	border: ${props => props.theme.projectBoxBorder} solid 1px;
	// }
	// .project-container-header{
	// 	color: ${props => props.theme.oppositeColor};
	// }

	// .vertical-timeline-element--work > * > * {
	// 	color: black;
	// }
	// .vertical-timeline-element-date {
	// 	color: ${props => props.theme.fontColor};
	// }

	// .main-introduction-paragraph > *{
	// 	animation-name: "text-light-to-dark";
	// 	animation-duration: 5s;
	// 	animation-delay: 0s;
	// }

	

`