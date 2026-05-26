import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./footer";

describe("Footer", () => {
  it("renders brand and tagline", () => {
    render(<Footer />);
    expect(screen.getByText("ReOL")).toBeInTheDocument();
    expect(
      screen.getByText(/Software that lasts/i),
    ).toBeInTheDocument();
  });
});
