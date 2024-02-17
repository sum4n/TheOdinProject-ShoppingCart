import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import ShopItems from "./ShopItems";

describe("ShopItems component", () => {
  it("Renders with prop data", () => {
    const { container } = render(
      <ShopItems
        title={"Product 1"}
        index={1}
        description={"A product"}
        rating={{ rate: 3, count: 33 }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
