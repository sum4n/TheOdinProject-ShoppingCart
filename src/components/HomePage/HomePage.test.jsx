import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import HomePage from "./HomePage";
import { MemoryRouter } from "react-router-dom";

vi.mock("./shopping_cart.webp", () => ({
  default: "test_image_path.webp",
}));

describe("HomePage component", () => {
  beforeEach(() => {
    render(<HomePage />, { wrapper: MemoryRouter });
  });

  it("displays the welcome message", () => {
    expect(
      screen.getByText("Welcome to Odin Project Shopping Cart")
    ).toBeInTheDocument();
  });

  it("has 'Shop' link with correct href", () => {
    const shopLink = screen.getByRole("link", { name: /shop/i });
    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute("href", "/products");
  });

  it("has shopping cart image with proper attributes", () => {
    const image = screen.getByRole("img", { name: /a shopping cart/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test_image_path.webp");
    expect(image).toHaveAttribute("alt", "a shopping cart");
  });
});
