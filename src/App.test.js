import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders getByRole learn react link", () => {
  render(<App />);
  const anchorElement = screen.getByRole("link", { name: /learn react/i });
  expect(anchorElement).toBeInTheDocument();
});
