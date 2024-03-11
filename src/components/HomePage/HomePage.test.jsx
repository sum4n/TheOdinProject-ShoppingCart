import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import HomePageBody from "./HomePageBody";
import { MemoryRouter } from "react-router-dom";

describe("HomePageBody component", () => {
  it("renders with prop totalItemsInCart with value 5", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePageBody totalItemsInCart={5} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
