import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import HomePageBody from "./HomePageBody";
import { MemoryRouter } from "react-router-dom";

describe("HomePageBody component", () => {
  it("renders with 1 para, 1 link and 1 image", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePageBody />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
