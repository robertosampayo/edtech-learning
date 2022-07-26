import "@testing-library/jest-dom";
import Courses from "../index";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import MockCourses from "../../../__mock__/coursesMock.json";
import { CoursesProvider } from "../../../context/courses/state";
import { GlobalStyle, theme } from "../../../styles/global.styles";

describe("Testing Courses Component", () => {
  test("Courses component has to list all courses", () => {
    render(
      <CoursesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Courses
            courses={MockCourses.courses}
            categories={MockCourses.categories}
            onSearch={jest.fn()}
          />
        </ThemeProvider>
      </CoursesProvider>
    );

    expect(
      screen.getByRole("heading", { name: /english for career development/i })
    ).toBeInTheDocument();
  });
});
