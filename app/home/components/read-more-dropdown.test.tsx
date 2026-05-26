import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ReadMoreDropdown from "./read-more-dropdown";

describe("ReadMoreDropdown Component", () => {
  it("renders a read more toggle and expands content on click", () => {
    render(<ReadMoreDropdown />);
    
    const button = screen.getByRole("button", { name: /read more/i });
    expect(button).toBeInTheDocument();
    
    // Content wrapper should have opacity-0 initially
    const content = screen.getByText(/At our core, we empower businesses/i).closest('div')?.parentElement?.parentElement;
    expect(content).toHaveClass("opacity-0");
    
    // Click to expand
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(content).toHaveClass("opacity-100");
  });
});
