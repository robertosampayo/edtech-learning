import "@testing-library/jest-dom";
import Course from "../index";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import MockCourse from "../../../__mock__/courseMock.json";
import { GlobalStyle, theme } from "../../../styles/global.styles";

describe("Testing Course Component", () => {
  test("Course has a video and the content of the course", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Course course={MockCourse.course} />
      </ThemeProvider>
    );

    expect(
      screen.getByText("English for career development")
    ).toBeInTheDocument();

    expect(
      screen.getByText("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ever since ...")
    ).toBeInTheDocument();
  });
});
