import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Carousel from "./carousel";

describe("Carousel", () => {
  it("renders all slide images", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(5);
  });

  it("renders three slide indicators", () => {
    render(<Carousel />);
    expect(screen.getAllByRole("button", { name: /go to slide/i })).toHaveLength(3);
  });

  it("exposes a horizontally scrollable track", () => {
    render(<Carousel />);
    const track = screen.getByRole("region", { name: /selected work slides/i });
    expect(track.className).toMatch(/overflow-x-auto/);
    expect(track.className).toMatch(/snap-x/);
  });
});
