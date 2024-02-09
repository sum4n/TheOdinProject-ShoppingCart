import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("renders correct components", () => {
    render(
      // Here Memory router is needed because of <Link> in the component
      // <Link> needs to appear inside router but not in tests.
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("The shopping project")).toBeInTheDocument();
    expect(screen.getByText(/Cart/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i }));
  });
});

// import { describe, it, expect } from "vitest";

// describe("something truthy and falsy", () => {
//   it("true to be true", () => {
//     expect(true).toBe(true);
//   });

//   it("false to be false", () => {
//     expect(false).toBe(false);
//   });
// });
