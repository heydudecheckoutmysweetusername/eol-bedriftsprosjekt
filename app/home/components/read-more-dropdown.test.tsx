import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ReadMoreDropdown from "./read-more-dropdown";

describe("ReadMoreDropdown", () => {
  it("renders closed by default", () => {
    render(<ReadMoreDropdown />);
    expect(screen.getByRole("button", { name: /read more/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.queryByText("Maintaining")).not.toBeInTheDocument();
  });

  it("expands to show about content when clicked", () => {
    render(<ReadMoreDropdown />);

    fireEvent.click(screen.getByRole("button", { name: /read more/i }));

    expect(screen.getByRole("button", { name: /read more/i })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByText("Maintaining")).toBeInTheDocument();
    expect(screen.getByText("EOL")).toBeInTheDocument();
    expect(screen.getByText(/At our core, we empower businesses/)).toBeInTheDocument();
  });
});
