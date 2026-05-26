import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Carousel from "./carousel";

describe("Carousel", () => {
  it("renders all 5 carousel images", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });

  it("renders images with correct alt text", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("alt", "Slide 1");
    expect(images[4]).toHaveAttribute("alt", "Slide 5");
  });

  it("shows only one centered image at a time by constraining container width", () => {
    const { container } = render(<Carousel />);
    const outer = container.firstChild as HTMLElement;
    expect(outer.className).toContain("overflow-hidden");
    expect(outer.className).toContain("w-[262px]");
    expect(outer.className).toContain("lg:w-[568px]");
    expect(outer.className).toContain("mx-auto");
  });

  it("prevents images from shrinking below carousel width", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      // The wrapper div has the dimensions, img has h-full w-full
      expect(img.parentElement?.className).toContain("shrink-0");
      expect(img.parentElement?.className).toContain("w-[262px]");
      expect(img.parentElement?.className).toContain("lg:w-[568px]");
    });
  });

  it("applies transition to the inner track for auto-swap", () => {
    const { container } = render(<Carousel />);
    const outer = container.firstChild as HTMLElement;
    const inner = outer.firstChild as HTMLElement;
    expect(inner.className).toContain("transition-transform");
    expect(inner.className).toContain("duration-500");
  });
});
