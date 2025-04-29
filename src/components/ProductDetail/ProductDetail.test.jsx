import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi, vitest } from "vitest";
import { MemoryRouter, Route, Routes, Outlet } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import userEvent from "@testing-library/user-event";

const productsData = [
  {
    id: 1,
    title: "Product A Title",
    description: "Product A description",
    image: "Product A Image Url",
    rating: { rate: 3, count: 10 },
    price: "5",
  },
  {
    id: 2,
    title: "Product B Title",
    description: "Product B description",
    image: "Product B Image Url",
    rating: { rate: 4, count: 8 },
    price: "10",
  },
  {
    id: 3,
    title: "Product C Title",
    description: "Product C description",
    image: "Product C Image Url",
    rating: { rate: 3.5, count: 55 },
    price: "20",
    quantity: 1,
  },
];

// Mock addToCart function
const addToCart = vi.fn();

const defaultContext = {
  data: productsData,
  error: false,
  loading: false,
  addToCart,
};

function renderWithRouterAndContext({
  urlParam = "1",
  contextValue = defaultContext,
}) {
  render(
    <MemoryRouter initialEntries={[`/products/${urlParam}`]}>
      <Routes>
        <Route element={<Outlet context={contextValue} />}>
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("ProductDetail component", () => {
  beforeEach(() => {
    addToCart.mockClear();
  });

  it("shows invalid URL error if the URL is not digit", () => {
    renderWithRouterAndContext({
      urlParam: "1q",
    });

    expect(screen.getByText("Invalid URL...")).toBeInTheDocument();
  });

  it("Shows loading if loading is true", () => {
    renderWithRouterAndContext({
      contextValue: { ...defaultContext, loading: true },
    });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Shows error if error is true", () => {
    renderWithRouterAndContext({
      contextValue: { ...defaultContext, error: true },
    });

    expect(
      screen.getByText("A network error was encountered.")
    ).toBeInTheDocument();
  });

  it("Displays product not found if custom URL is out of index", () => {
    renderWithRouterAndContext({ urlParam: "11" });

    expect(screen.getByText("Product not found...")).toBeInTheDocument();
  });

  it("Displays all html elements correctly", () => {
    const urlParam = "2";
    const index = parseInt(urlParam) - 1;
    const product = productsData[index];

    renderWithRouterAndContext({ urlParam: urlParam });

    // screen.debug();
    // check image
    const image = screen.getByRole("img", { name: product.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", product.image);
    expect(image).toHaveAttribute("alt", product.title);
    // check product title
    expect(screen.getByText(`${product.title}`)).toBeInTheDocument();
    // check description
    expect(screen.getByText(`${product.description}`)).toBeInTheDocument();
    // rating
    expect(
      screen.getByText(`${product.rating.rate} of ${product.rating.count}`)
    ).toBeInTheDocument();
    // price
    expect(screen.getByText(`Price: ${product.price}$`)).toBeInTheDocument();
    // Button
    expect(
      screen.getByRole("button", { name: "Add to cart" })
    ).toBeInTheDocument();
  });

  it("calls addToCart when 'Add to cart' is clicked", async () => {
    const user = userEvent.setup();

    renderWithRouterAndContext({});

    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    expect(addToCart).toHaveBeenCalled();
  });

  it("renders proper elements if product has positive quantity", () => {
    const urlParam = "3"; // will get 3rd product which has positive quantity

    renderWithRouterAndContext({ urlParam: urlParam });

    // screen.debug();

    expect(
      screen.queryByRole("button", { name: /add to cart/i })
    ).not.toBeInTheDocument();

    expect(screen.getByText("Product added to cart.")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /go to cart/i })
    ).toBeInTheDocument();
  });
});
