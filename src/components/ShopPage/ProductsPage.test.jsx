import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import ShopPage from "./ShopPage";
import { MemoryRouter } from "react-router-dom";

const shopPropError = "An error occured";
const shopPropLoading = "Loading";
const shopPropData = [
  {
    id: 1,
    title: "Product1",
    description: "A product",
    rating: { rate: 3, count: 10 },
    price: "5$",
  },
  {
    id: 2,
    title: "Product2",
    description: "B product",
    rating: { rate: 4, count: 8 },
    price: "10$",
  },
];

describe("ShopPage component", () => {
  it("Renders with error prop and displays error", () => {
    const { container } = render(
      <MemoryRouter>
        <ShopPage error={shopPropError} itemsInCart={[]} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it("Renders with loading prop and display loading", () => {
    const { container } = render(
      <MemoryRouter>
        <ShopPage loading={shopPropLoading} itemsInCart={[]} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders with data", () => {
    const { container } = render(
      <MemoryRouter>
        <ShopPage data={shopPropData} itemsInCart={[]} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
