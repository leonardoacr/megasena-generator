import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/router"; // import the useRouter hook
import Dashboards from "@/pages/dashboards";
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

describe("Dashboards", () => {
  it("should render /dashboards page", () => {
    render(<Dashboards />);

    expect(
      screen.getByText(
        "Estimativa de Resultados Passados (Quantidade vs. Número de Jogo)"
      )
    ).toBeInTheDocument();
  });
});
