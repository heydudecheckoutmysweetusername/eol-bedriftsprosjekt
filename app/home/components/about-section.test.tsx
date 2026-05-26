import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutSection from "./about-section";

describe("AboutSection", () => {
  it("renders the heading with EOL italicized", () => {
    render(<AboutSection />);
    expect(screen.getByText("Maintaining")).toBeInTheDocument();
    expect(screen.getByText("EOL")).toBeInTheDocument();
    expect(screen.getByText("software")).toBeInTheDocument();
  });

  it("renders the body paragraph", () => {
    render(<AboutSection />);
    expect(
      screen.getByText(/At our core, we empower businesses/),
    ).toBeInTheDocument();
  });
});
