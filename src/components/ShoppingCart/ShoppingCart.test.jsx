import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ShoppingCart from "./ShoppingCart";

const itemList = [
  {
    id: 1,
    title: "Product1",
    description: "A product",
    price: 5,
    quantity: 1,
  },
  {
    id: 2,
    title: "Product2",
    description: "B product",
    price: 10,
    quantity: 1,
  },
];

const itemWithIncreasedQuantity = [
  {
    id: 3,
    title: "ProductX",
    description: "X product",
    price: 50,
    quantity: 3,
  },
];

describe("ShoppingCart component", () => {
  it("Renders with list of items", () => {
    render(<ShoppingCart cartItems={itemList} />);
    // screen.debug();

    expect(screen.getByText(/product1/i)).toBeInTheDocument();
    expect(screen.getByText(/product2/i)).toBeInTheDocument();
    expect(screen.getByText(/total amount: 15/i)).toBeInTheDocument();
  });

  it("Renders with correct price when quantity is increased", () => {
    render(<ShoppingCart cartItems={itemWithIncreasedQuantity} />);

    expect(screen.getByText(/total amount: 150/i)).toBeInTheDocument();
  });
});
