import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TrustedBy from "./trusted-by";

describe("TrustedBy Component", () => {
  it("renders the customer logos images", () => {
    render(<TrustedBy />);
    expect(screen.getAllByAltText("Customer logos").length).toBeGreaterThan(0);
  });
});
