import React from "react";
import { render, screen } from "@testing-library/react";
import About from "@/pages/about";
import "@testing-library/jest-dom/extend-expect";

// create a mock implementation of the useRouter hook
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("About", () => {
  it("should render /about page", () => {
    render(<About />);
    const header = screen.getByText("Descrição dos algoritmos utilizados");
    expect(header).toBeInTheDocument();
  });
});
