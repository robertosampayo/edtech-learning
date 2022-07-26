import "@testing-library/jest-dom";
import Search from "../index";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../../../../styles/global.styles";

describe("Testing Search component", () => {
  test("Search component should trigger onSearch fn when is needed", () => {
    const searchFn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Search onSearch={searchFn} />
      </ThemeProvider>
    );
    const searchButton = screen.getByTestId("search-button");
    fireEvent.click(searchButton);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Engl" } });

    expect(searchFn).toBeCalledTimes(1);
  });
});
