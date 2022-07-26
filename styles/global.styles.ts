import { createGlobalStyle } from "styled-components"
import * as CONTANTS from "../contants";


interface ThemeInterface {
  colors: {
    primary: string
    background: string,
    board: string,
    white: string,
    text: string,
    title: string,
    tabText: string,
    subtitle: string,
    disabled: string,
    disabledDark: string,
    grayElements: string,
    rank: string,
    chapter1: string,
    cahpter2: string,
  },
  utils: {
    borderRadius: string
  },
  fonts: {
    bold: string
    regular: string,
    medium: string,
  },
  device : {
    mobile: string,
    tablet: string
  }
}

export const theme: ThemeInterface = {
  colors: {
    primary: "#0070f3",
    background: "#170600",
    board: "#f9f9f9",
    white: "#ffffff",
    text: "#e9e9e9",
    title: "#0c0302",
    tabText: "#9c9b9b",
    subtitle: "#555354",
    disabled: "#bbb9ba",
    disabledDark: "#50413a",
    grayElements: "#666462",
    rank: "#edbe75",
    chapter1: "#d97356",
    cahpter2: "#eebc74",
  },
  utils: {
    borderRadius: "1.5em"
  },
  fonts: {
    bold: "2rem",
    regular: "1rem",
    medium: "1.5rem",
  },
  device: {
    mobile: "560px",
    tablet: "1250px"
  }

}

export const GlobalStyle = createGlobalStyle<{theme: ThemeInterface}>`



    @font-face {
        font-family: 'cabinRegular';
        src: local('cabinRegular'), url('/fonts/cabin/Cabin-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }

    @font-face {
        font-family: 'cabinMedium';
        src: local('cabinMedium'), url('/fonts/cabin/Cabin-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
    }

    @font-face {
        font-family: 'cabinSemibold';
        src: local('cabinSemibold'), url('/fonts/cabin/Cabin-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: fallback;
    }

    @font-face {
        font-family: 'cabinBold';
        src: local('cabinBold'), url('/fonts/cabin/Cabin-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: fallback;
    }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: cabinMedium, serif;
    font-weight: 300;
    font-size: ${props => props.theme.fonts.regular};
    background: ${props => props.theme.colors.background};
    padding: 20px 20px 20px 0;
    overflow: hidden;

    @media screen and (max-width: ${CONTANTS.DEVICE.TABLET}) {
      overflow: scroll;
    }
    
  }


  h1 {
    font-size: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.title};
    margin: 0;
  }

  h2 {
    font-size: ${props => props.theme.fonts.medium};
    color: ${props => props.theme.colors.subtitle};
    margin: 0;
  }

  h3 {
    font-size: ${props => props.theme.fonts.regular};
    margin: 0;
  }

  h4 {
    font-size: ${props => props.theme.fonts.regular};
    font-weight: 300;
    margin: 0;
  }

  p {
    font-size: ${props => props.theme.fonts.regular};
    font-weight: 300;
    color: ${props => props.theme.colors.subtitle};
    opacity: 0.4;
    margin: 0;
  }
`