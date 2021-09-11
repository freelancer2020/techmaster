import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./components/Header/Header";
import App from "./App";

describe("App to renders", () => {
  test("<Header /> contains Techmaster as logo", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Techmaster/);
    expect(linkElement).toBeInTheDocument();
  });

  test("clicking on brand will render TechMaster", () => {
    render(<Header />);
    const brand = screen.getByText(/Techmaster/);
    userEvent.click(brand);
    expect(brand).toHaveTextContent(/TechMaster/);
  });
});
