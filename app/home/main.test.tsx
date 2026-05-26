import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LandingPage from "./main";

describe("LandingPage Component", () => {
  it("renders the main components of the landing page", () => {
    render(<LandingPage />);
    
    // Header should be present
    expect(screen.getByRole("banner")).toBeInTheDocument();
    
    // Title and description
    expect(screen.getByText("We keep your old software alive")).toBeInTheDocument();
    expect(screen.getByText(/We build and maintain the systems that keep your business running/i)).toBeInTheDocument();
    
    // Carousel should be present
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
    
    // TrustedBy should be present
    expect(screen.getAllByText("Trusted by").length).toBeGreaterThan(0);
    
    // Contact sales
    expect(screen.getByRole("button", { name: /contact sales/i })).toBeInTheDocument();
    
    // Read more dropdown
    expect(screen.getByRole("button", { name: /read more/i })).toBeInTheDocument();
    
    // Footer
    expect(screen.getByText("Software that lasts. Built for companies and people who value stability over hype.")).toBeInTheDocument();
  });
});
