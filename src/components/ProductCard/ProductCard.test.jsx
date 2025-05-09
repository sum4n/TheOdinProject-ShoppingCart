import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import ProductCard from "./ProductCard";
import { MemoryRouter } from "react-router-dom";

const productData = {
  title: "Product Title",
  index: 1,
  rating: { rate: 3.5, count: 100 },
  price: 55.99,
  imgSource: "imageURL",
};

describe("ProductCard Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProductCard
          title={productData.title}
          index={productData.index}
          rating={productData.rating}
          price={productData.price}
          imgSource={productData.imgSource}
        />
      </MemoryRouter>
    );
  });

  it("Renders a link of the product", () => {
    // screen.debug();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/products/${productData.index}`);
  });

  it("Has image with correct attributes", () => {
    const image = screen.getByRole("img", { name: productData.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", `${productData.imgSource}`);
    expect(image).toHaveAttribute("alt", `${productData.title}`);
  });

  it("Shows correct product title, rating and price", () => {
    expect(screen.getByText(`${productData.title}`)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${productData.rating.rate} of ${productData.rating.count}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Price: ${productData.price}$`)
    ).toBeInTheDocument();
  });
});
