import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PromoVideo from "./promo-video";

describe("PromoVideo", () => {
  it("renders the video section anchor", () => {
    render(<PromoVideo />);
    expect(document.getElementById("reklame-video")).toBeInTheDocument();
  });

  it("renders the reklame video source", () => {
    const { container } = render(<PromoVideo />);
    const video = container.querySelector("video");
    expect(video).toHaveAttribute("src", "/videos/reklame.mp4");
  });
});
