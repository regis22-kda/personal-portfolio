import { render, screen } from "@testing-library/react";
import Projects from "../pages/Projects";

describe("Projects Page", () => {
  test("renders project titles", () => {
    render(<Projects />);
    expect(screen.getByText(/Portfolio Website/i)).toBeInTheDocument();
    expect(screen.getByText(/E-commerce App/i)).toBeInTheDocument();
    expect(screen.getByText(/Weather Dashboard/i)).toBeInTheDocument();
  });
});