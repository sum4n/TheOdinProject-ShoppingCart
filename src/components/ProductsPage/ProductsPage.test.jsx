import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, vitest } from "vitest";
import ProductsPage from "./ProductsPage";
import { useOutletContext } from "react-router-dom";

const productsData = [
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

vi.mock("../ProductCard/ProductCard", () => ({
  default: () => <div data-testid="mock-product-card" />,
}));

vi.mock("react-router-dom", () => {
  const actual = vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vitest.fn(),
  };
});

describe("ProductsPage component", () => {
  it("Displays error message if an error is received", () => {
    useOutletContext.mockReturnValue({
      data: null,
      error: true,
      loading: false,
    });

    render(<ProductsPage />);

    expect(
      screen.getByText("A network error was encountered.")
    ).toBeInTheDocument();
  });

  it("Displays loading message when loading is true", () => {
    useOutletContext.mockReturnValue({
      data: null,
      error: false,
      loading: true,
    });

    render(<ProductsPage />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Displays 2 ProductCards when passed 2 items in the data", () => {
    useOutletContext.mockReturnValue({
      data: productsData,
      error: false,
      loading: false,
    });

    render(<ProductsPage />);

    screen.debug();
    expect(screen.getAllByTestId("mock-product-card")).toHaveLength(2);
  });

  it("Displays no ProductCards if data is empty", () => {
    useOutletContext.mockReturnValue({
      data: [],
      error: false,
      loading: false,
    });

    render(<ProductsPage />);
    expect(screen.queryByTestId("mock-product-card")).not.toBeInTheDocument();
  });

  // Clear mocks between tests.
  afterEach(() => {
    vi.clearAllMocks();
  });
});
