import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, vi } from "vitest";
import ShoppingCart from "./ShoppingCart";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";

const itemsInCart = [
  {
    id: 1,
    title: "Product A Title",
    description: "Product A Description",
    image: "Product A img URL",
    price: 5,
    quantity: 1,
  },
  {
    id: 2,
    title: "Product B Title",
    description: "Product B description",
    image: "Product B img URL",
    price: 10,
    quantity: 3,
  },
];

const addToCart = vi.fn();
const deleteFromCart = vi.fn();

let renderResult;

describe("ShoppingCart component", () => {
  beforeEach(() => {
    renderResult = render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route
            element={
              <Outlet context={{ itemsInCart, addToCart, deleteFromCart }} />
            }
          >
            <Route path="/cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });

  it("Renders exactly 2 items", () => {
    const items = screen.getAllByTestId("cart-item");
    expect(items).toHaveLength(2);
  });

  it("Renders total amount correctly", () => {
    let totalPrice = 0;
    itemsInCart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    expect(
      screen.getByText(`Total amount: ${totalPrice}$`)
    ).toBeInTheDocument();
  });

  it("Matches snapshot", () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
