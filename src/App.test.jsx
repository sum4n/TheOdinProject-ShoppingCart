import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("App component", () => {
  it("renders homePage", () => {
    render(
      // Here Memory router is needed because of <Link> in the component
      // <Link> needs to appear inside router but not in tests.
      <MemoryRouter initialEntries={["/home"]}>
        <Routes>
          <Route path="/:name" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("The shopping project")).toBeInTheDocument();
    expect(screen.getByText(/Cart:/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i }));
    expect(screen.getByText(/odin project/i)).toBeInTheDocument();
  });

  it("renders shopPage", () => {
    render(
      <MemoryRouter initialEntries={["/shopPage"]}>
        <Routes>
          <Route path="/:name" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/checkout/i)).toBeInTheDocument();
  });

  it("renders error page", () => {
    render(
      <MemoryRouter initialEntries={["/errorRoute"]}>
        <Routes>
          <Route path="/:name" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/route does not exist/i)).toBeInTheDocument();
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
