import React from "react";
import "@testing-library/jest-dom";
import ChapterPill from "../index";
import { render, screen } from "@testing-library/react";
import {ThemeProvider} from "styled-components";
import { GlobalStyle, theme } from "../../../styles/global.styles";

describe("Testing Chapter Pill", () => {
  test("Pill has to show the chapter content", () => {
    const onClick = jest.fn();
    const mockChapter ={
      id: "0",
      title: "Chapter 1",
      description: "Content of chapter 1",
      duration: "99966",
    }
    
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ChapterPill chapter={mockChapter} onClick={onClick} />

      </ThemeProvider>
      );

      expect(
        screen.getByRole("heading", { name: /Chapter 1/i })
        ).toBeInTheDocument()
  });


});
