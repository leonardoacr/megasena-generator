import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Dashboards from "@/pages/dashboards";
import "@testing-library/jest-dom/extend-expect";
import { DashboardContext } from "@/contexts/DashboardContext";
import { IDashboardContext } from "@/types/DashboardDataTypes";

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

const waitForLoadingSpinnerToDisappear = async () => {
  await waitFor(() =>
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  );
};

describe("Dashboards", () => {
  it("should render /dashboards page", () => {
    render(<Dashboards />);

    expect(
      screen.getByText(
        "Estimativa de Resultados Passados (Quantidade vs. Número de Jogo)"
      )
    ).toBeInTheDocument();
  });

  it("renders graph when there is data available", async () => {
    const dashboardContext: IDashboardContext = {
      passDashboardData: {
        first_x: [1, 2, 3],
        first_y: [4, 5, 6],
        second_x: [],
        second_y: [],
        third_x: [],
        third_y: [],
        fourth_x: [],
        fourth_y: [],
        fifth_x: [],
        fifth_y: [],
        sixth_x: [],
        sixth_y: [],
      },
      graphData: {
        xKey: "first_x",
        yKey: "first_y",
        title: "First Graph",
        index: 0,
      },
      chartLabelColor: "#a0a1ac",
      chartBackgroundColor: "rgba(81, 150, 220, 1)",
      chartBorderColor: "blue",
      xLabel: "Número",
      yLabel: "Quantidade",
      setGraphData: jest.fn(),
      setPassDashboardData: jest.fn(),
    };
    render(
      <DashboardContext.Provider value={dashboardContext}>
        <Dashboards />
      </DashboardContext.Provider>
    );

    await waitForLoadingSpinnerToDisappear();

    expect(screen.getByTestId("graphRendered")).toBeInTheDocument();
  });

  it("should render the dashboards", async () => {
    render(<Dashboards />);

    await waitForLoadingSpinnerToDisappear();

    // locate the graph components by their test ID
    const graphs = screen.getAllByTestId("graph-rendered");

    // check if at least one graph is present in the DOM
    expect(graphs.length).toBeGreaterThan(0);
  });
});
