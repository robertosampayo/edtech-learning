import "@testing-library/jest-dom";
import Menu from "../index";
import { fireEvent, render, within } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../../styles/global.styles";

describe("Testing Menu component", () => {
  test("Menu should list 8 items", () => {
    const changeTab = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu onChangeTab={changeTab} />
      </ThemeProvider>
    );

    expect(screen.getByText(/Main/i)).toBeInTheDocument();
    expect(screen.getByText(/Courses/i)).toBeInTheDocument();
    expect(screen.getByText(/Schedule/i)).toBeInTheDocument();

    expect(screen.getByText(/Materials/i)).toBeInTheDocument();

    expect(screen.getByText(/Certificates/i)).toBeInTheDocument();

    expect(screen.getByText(/Messages/i)).toBeInTheDocument();

    expect(screen.getByText(/Settings/i)).toBeInTheDocument();

    const Main = screen.getByTestId("menu-main");
    fireEvent.click(Main);
    expect(changeTab).toBeCalledTimes(1);

    expect(Main.querySelector("li > svg")).toHaveAttribute("width", "2em");
    expect(Main.querySelector("li > svg")).toHaveAttribute("height", "2em");

    const viewMaterials = screen.getByTestId("menu-materials");
    expect(viewMaterials).toHaveTextContent("Materials");

    const viewCertificates = screen.getByTestId("menu-certificates");
    expect(viewCertificates).toHaveTextContent("Certificates");

    const viewMessages = screen.getByTestId("menu-messages");
    expect(viewMessages).toHaveTextContent("Messages");
  });
});
