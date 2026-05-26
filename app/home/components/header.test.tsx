import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders the logo text", () => {
    render(<Header />);
    expect(screen.getByText("ReOL")).toBeInTheDocument();
  });

  it("does not render the maintained software pill", () => {
    render(<Header />);
    expect(screen.queryByText("Maintained software")).not.toBeInTheDocument();
  });

  it("renders the hamburger menu button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
