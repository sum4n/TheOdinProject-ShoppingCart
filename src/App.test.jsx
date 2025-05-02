import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import { afterEach, beforeEach, describe, expect, vi, vitest } from "vitest";
import {
  MemoryRouter,
  Route,
  Routes,
  useOutletContext,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";

const data = [
  {
    id: 1,
    title: "Product A Title",
    description: "Product A Description",
    image: "Product A img URL",
    price: 5,
  },
  {
    id: 2,
    title: "Product B Title",
    description: "Product B description",
    image: "Product B img URL",
    price: 10,
  },
];

// Mock navigation bar
vitest.mock("./components/NavigationBar/NavigationBar", () => ({
  default: ({ totalItemsInCart }) => <div>Cart: {totalItemsInCart}</div>,
}));

// Dummy component to receive context form Outlet.
function DummyComponent() {
  const { data, loading, error, addToCart, deleteFromCart } =
    useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered.</p>;

  return (
    <div>
      <p>Received {data.length} products.</p>

      <button onClick={() => addToCart(data[0], 2)}>Add Product A</button>
      <button onClick={() => deleteFromCart(data[0])}>Delete Product A</button>
    </div>
  );
}

function renderAppComponent() {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DummyComponent />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("App component", () => {
  beforeEach(() => {
    // Mock fetch
    window.fetch = vi.fn(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve(data),
      });
    });
  });

  it("shows loading while api fetching in progress", async () => {
    renderAppComponent();

    // screen.debug();

    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });

  it("error is shown", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "API is down" });
    });

    renderAppComponent();

    const errorMessage = await screen.findByText(
      "A network error was encountered."
    );
    // screen.debug();
    expect(errorMessage).toBeInTheDocument();
  });

  it("handles server error responses correctly", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.resolve({ status: 500 });
    });

    renderAppComponent();

    const errorMessage = await screen.findByText(
      "A network error was encountered."
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("sends data to outlet", async () => {
    renderAppComponent();

    const productReceivedText = await screen.findByText(
      `Received ${data.length} products.`
    );
    // screen.debug();
    expect(productReceivedText).toBeInTheDocument();
  });

  it("can add and delete items form cart and passes totalItemsInCart to NavigationBar", async () => {
    const user = userEvent.setup();

    renderAppComponent();

    const addBtn = await screen.findByRole("button", { name: "Add Product A" });
    await user.click(addBtn);
    // screen.debug();
    expect(screen.getByText("Cart: 2")).toBeInTheDocument();

    const deleteBtn = screen.getByRole("button", { name: "Delete Product A" });
    await user.click(deleteBtn);
    // screen.debug();
    expect(screen.getByText("Cart: 0")).toBeInTheDocument();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
