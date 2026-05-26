import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroTitle from "./hero-title";

describe("HeroTitle", () => {
  it("renders the hero headline", () => {
    render(<HeroTitle />);
    expect(
      screen.getByRole("heading", {
        name: /we keep your old software alive/i,
      }),
    ).toBeInTheDocument();
  });
});
