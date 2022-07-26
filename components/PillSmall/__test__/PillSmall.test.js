import "@testing-library/jest-dom";
import PillSmall from "../index";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../../styles/global.styles";
import * as CONTANTS from "../../../contants";

describe("Testing Pill small component", () => {
  test("Pill small should show the correct level text", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PillSmall level={CONTANTS.INTERMEDIATE} />
      </ThemeProvider>
    );

    expect(screen.getByText(/intermediate/i)).toHaveTextContent("Intermediate");
  });

  test("Pill small should show All levels message when the level is All", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PillSmall level={CONTANTS.ALL} />
      </ThemeProvider>
    );

    expect(screen.getByText(/all/i)).toHaveTextContent("All levels");
  });
});
