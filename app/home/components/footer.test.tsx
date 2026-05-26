import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer Component", () => {
  it("renders the footer content correctly", () => {
    render(<Footer />);
    expect(screen.getByText("ReOL")).toBeInTheDocument();
    expect(screen.getByText(/Software that lasts/i)).toBeInTheDocument();
    expect(screen.getByText("Oslo, Norway")).toBeInTheDocument();
    expect(screen.getByText("2026")).toBeInTheDocument();
  });
});
