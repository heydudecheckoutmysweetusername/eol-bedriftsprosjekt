import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonPair from "./button-pair";

describe("ButtonPair", () => {
  it("renders contact sales button", () => {
    render(<ButtonPair />);
    expect(screen.getByText("Contact sales")).toBeInTheDocument();
  });

  it("renders read more link that scrolls to the video", () => {
    render(<ButtonPair />);
    const link = screen.getByRole("link", { name: "Read more" });
    expect(link).toHaveAttribute("href", "#reklame-video");
  });
});
