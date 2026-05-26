import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactSales from "./contact-sales";

describe("ContactSales Component", () => {
  it("renders the contact sales button with an arrow", () => {
    render(<ContactSales />);
    expect(screen.getByRole("button", { name: /contact sales/i })).toBeInTheDocument();
    expect(screen.getByTestId("arrow-right-icon")).toBeInTheDocument();
  });
});
