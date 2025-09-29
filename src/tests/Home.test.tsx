import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  test("renders name", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/Rheganandar Bagas/i)).toBeInTheDocument();
  });

  test("renders buttons", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/View My Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/View My CV/i)).toBeInTheDocument();
  });
});
