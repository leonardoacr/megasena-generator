import { render, screen } from "@testing-library/react";
import Dashboard from "@/components/Dashboard";

describe("Dashboard component", () => {
  it("displays error message when isError is true", () => {
    const props = {
      dashboardData: null,
      isLoading: false,
      isError: true,
    };

    render(<Dashboard />);

    const errorMessage = screen.getByText("Error fetching data from the API.");

    expect(errorMessage).toBeInTheDocument();
  });
});
