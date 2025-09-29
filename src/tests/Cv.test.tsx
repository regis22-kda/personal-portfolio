import { render, screen } from "@testing-library/react";
import CV from "../pages/Cv";

describe("CV Page", () => {
  test("renders Education section", () => {
    render(<CV />);
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
  });

  test("renders Experience section", () => {
    render(<CV />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });

  test("renders Skills section", () => {
    render(<CV />);
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  });
});