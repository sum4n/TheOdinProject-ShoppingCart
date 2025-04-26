import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import NavigationBar from "./NavigationBar";
import { MemoryRouter } from "react-router-dom";

describe("NavigationBar component", () => {
  it("renders with  5 links", () => {
    render(
      <MemoryRouter>
        <NavigationBar totalItemsInCart={1} />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("link")).toHaveLength(5);
    expect(
      screen.getByRole("link", { name: /the shopping project/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("displays 8 cart items", () => {
    render(<NavigationBar totalItemsInCart={8} />, { wrapper: MemoryRouter });

    expect(screen.getByRole("link", { name: /cart: 8/i })).toBeInTheDocument();
  });

  it("matches snapshot with 10 items in the cart", () => {
    const { container } = render(
      <MemoryRouter>
        <NavigationBar totalItemsInCart={10} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
