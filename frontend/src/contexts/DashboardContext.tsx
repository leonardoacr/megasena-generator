import { IDashboardContext } from "@/types/DashboardDataTypes";
import { createContext, useState } from "react";

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [graphData, setGraphData] = useState<any>({
    xKey: "",
    yKey: "",
    title: "",
    index: 0,
  });

  const [passDashboardData, setPassDashboardData] = useState<any>({
    first_x: [],
    first_y: [],
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
  });

  const chartLabelColor = "#a0a1ac";
  const chartBackgroundColor = "rgba(81, 150, 220, 1)";
  const chartBorderColor = "blue";
  const xLabel = "Número";
  const yLabel = "Quantidade";

  const updateGraphData = (
    xKey: string,
    yKey: string,
    title: string,
    index: number
  ) => {
    setGraphData({ xKey, yKey, title, index });
  };

  return (
    <DashboardContext.Provider
      value={{
        graphData,
        chartLabelColor,
        chartBackgroundColor,
        chartBorderColor,
        xLabel,
        yLabel,
        passDashboardData,
        setGraphData: updateGraphData,
        setPassDashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
