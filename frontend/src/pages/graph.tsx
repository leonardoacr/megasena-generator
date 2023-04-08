import Graphs from "@/components/Graphs";
import Header from "@/components/Header";
import { IDashboardData } from "@/types/DashboardDataTypes";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

const Graph = () => {
  const dashboardContext = useContext(DashboardContext);

  const [dashboardData, setDashboardData] = useState<IDashboardData>({
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

  useEffect(() => {
    if (dashboardContext.passDashboardData) {
      setDashboardData(dashboardContext.passDashboardData);
    }
  }, [dashboardContext.passDashboardData]);

  // check if there is data available, otherwise show a message
  if (
    dashboardData.fifth_x.length === 0 ||
    !dashboardContext.graphData.xKey ||
    !dashboardContext.graphData.yKey ||
    !dashboardContext.graphData.title
  ) {
    return (
      <div className="font-montserrat mt-16 h-full bg-background-page text-white">
        <Header />
        <div className="flex h-screen items-center justify-center text-center">
          <h1 className="text-2xl">Selecione um gráfico nos dashboards.</h1>
        </div>
      </div>
    );
  }

  // render the Graph component with the retrieved data
  return (
    <div className="font-montserrat mt-16 h-full bg-background-page text-white">
      <Header />
      <div className=" flex h-screen items-center justify-center">
        <div
          className="w-5/6 items-center justify-center rounded-md bg-background-dashboard p-4"
          key={dashboardContext.graphData.index}
        >
          <Graphs
            graphData={[
              {
                title: dashboardContext.graphData.title,
                x: dashboardData[dashboardContext.graphData.xKey],
                y: dashboardData[dashboardContext.graphData.yKey],
                chartLabelColor: dashboardContext.chartLabelColor,
                chartBackgroundColor: dashboardContext.chartBackgroundColor,
                chartBorderColor: dashboardContext.chartBorderColor,
                xLabel: dashboardContext.xLabel,
                yLabel: dashboardContext.yLabel,
                graphType: "Bar",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
