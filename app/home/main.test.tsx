import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LandingPage from "./main";

describe("LandingPage", () => {
  it("renders the header with ReOL logo", () => {
    render(<LandingPage />);
    expect(screen.getByText("ReOL")).toBeInTheDocument();
  });

  it("renders the carousel section", () => {
    render(<LandingPage />);
    const slides = screen.getAllByRole("img");
    const carouselImage = slides.find((img) =>
      img.getAttribute("alt")?.startsWith("Slide"),
    );
    expect(carouselImage).toBeTruthy();
  });

  it("renders the Trusted by section", () => {
    render(<LandingPage />);
    expect(screen.getByText("Trusted by")).toBeInTheDocument();
  });

  it("renders both buttons", () => {
    render(<LandingPage />);
    expect(screen.getByText("Contact sales")).toBeInTheDocument();
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("renders the About section", () => {
    render(<LandingPage />);
    expect(screen.getByText("Maintaining")).toBeInTheDocument();
  });
});
