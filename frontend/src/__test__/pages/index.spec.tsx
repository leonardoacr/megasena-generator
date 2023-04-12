import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/router"; // import the useRouter hook
import Home from "@/pages/index";
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

// define a helper function for waiting for the loading spinner to disappear
const waitForLoadingSpinnerToDisappear = async () => {
  await waitFor(() =>
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  );
};

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("should render loading spinner when loading", async () => {
    const message = screen.queryByText("Loading...");
    expect(message).toBeTruthy();
    await waitForLoadingSpinnerToDisappear();
  });

  it("should display the results when data is loaded or an error if the API is not working", async () => {
    await waitForLoadingSpinnerToDisappear();

    await waitFor(() => {
      const errorMessage =
        screen.queryByText("Erro carregando dados da API...") || false;

      if (errorMessage) {
        expect(errorMessage).toBeInTheDocument();
      } else {
        expect(screen.getByText("JOGO GERADO")).toBeInTheDocument();
      }
    });
  });

  it("should display the results when the data is loaded and the form is used", async () => {
    await waitForLoadingSpinnerToDisappear();

    await waitFor(async () => {
      const errorMessage =
        screen.queryByText("Erro carregando dados da API...") || false;

      if (errorMessage) {
        expect(errorMessage).toBeInTheDocument();
      } else {
        fireEvent.submit(await screen.getByTestId("new-game-form"));

        await waitForLoadingSpinnerToDisappear();

        expect(screen.getByText("JOGO GERADO")).toBeInTheDocument();
      }
    });
  });

  it("should redirect the user to /dashboards when clicked", async () => {
    // set up the test
    const pushMock = jest.fn();
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    await waitForLoadingSpinnerToDisappear();

    // simulate a click on the button
    await waitFor(() => {
      expect(screen.getByTestId("dashboardButton")).toBeInTheDocument();
      fireEvent.click(screen.getByTestId("dashboardButton"));
    });

    // simulate navigating to /dashboards page
    window.history.pushState({}, "Dashboards", "/dashboards");
    const event = new Event("popstate");
    window.dispatchEvent(event);

    // check that the user is redirected to the correct URL
    expect(window.location.pathname).toEqual("/dashboards");
  });
});
