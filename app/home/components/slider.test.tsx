import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Slider from "./slider";

describe("Slider", () => {
  it("renders all 5 slider images", () => {
    render(<Slider />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });

  it("renders images with correct alt text", () => {
    render(<Slider />);
    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
    expect(screen.getByAltText("Slide 5")).toBeInTheDocument();
  });

  it("uses the landing slider viewport class", () => {
    render(<Slider />);
    expect(screen.getByTestId("slider").className).toContain("landing-slider");
  });

  it("applies transition to the inner track for auto-swap", () => {
    render(<Slider />);
    const track = screen.getByTestId("slider").firstChild as HTMLElement;
    expect(track.className).toContain("landing-slider__track");
  });
});
