import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import NavigationBar from "./NavigationBar";
import { MemoryRouter } from "react-router-dom";

describe("NavigationBar component", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <NavigationBar totalItemsInCart={1} />
      </MemoryRouter>
    );
    expect(screen.getByText(/the shopping project/i)).toBeInTheDocument();
    expect(screen.getByText(/cart: 1/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link")).length(3);
  });

  // Avoid naming "renders correctly" snapshots.
  // Create name that describes the purpose of the snapshot.
  it("renders with 10 cart items", () => {
    const { container } = render(
      <MemoryRouter>
        <NavigationBar totalItemsInCart={10} />
      </MemoryRouter>
    );

    // snapshot test
    expect(container).toMatchSnapshot();
  });
});
