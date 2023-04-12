import React from "react";
import { render, screen } from "@testing-library/react";
import Graph from "@/pages/graph";
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

describe("Graph", () => {
  it("renders message when there is no data available", () => {
    render(<Graph />);

    expect(
      screen.getByText("Selecione um gráfico nos dashboards.")
    ).toBeInTheDocument();
  });

  it("renders graph when there is data available", () => {
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
        <Graph />
      </DashboardContext.Provider>
    );
    expect(screen.getByTestId("graph-rendered")).toBeInTheDocument();
  });
});
