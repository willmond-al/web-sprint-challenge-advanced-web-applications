import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles'

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  // const fakeColorList = jest.fn()
  render(<BubblePage />)

  const bubbles = screen.findByRole("Bubbles")
  expect(bubbles).not.toBeNull()
  
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading