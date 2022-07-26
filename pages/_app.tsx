import { GlobalStyle, theme } from "../styles/global.styles";
import { ThemeProvider } from "styled-components";
import { CoursesProvider } from "../context/courses/state";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CoursesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </CoursesProvider>
    </>
  );
}
