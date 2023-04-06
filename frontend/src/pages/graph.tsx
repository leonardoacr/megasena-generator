import Graphs from "@/components/Graphs";
import Header from "@/components/Header";
import { IDashboardData } from "@/hooks/useDashboardData";
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
    console.log("hello graph page");
    console.log("Data:", dashboardContext.passDashboardData);
    if (dashboardContext.passDashboardData) {
      console.log(dashboardContext.chartLabelColor);
      console.log(
        dashboardContext.graphData.xKey,
        dashboardContext.graphData.yKey,
        dashboardContext.graphData.title,
        dashboardContext.graphData.index
      );
      setDashboardData(dashboardContext.passDashboardData);
    }
  }, [
    dashboardContext.passDashboardData,
    dashboardContext.graphData,
    dashboardContext.chartLabelColor,
    dashboardContext.chartBackgroundColor,
    dashboardContext.chartBorderColor,
    dashboardContext.xLabel,
    dashboardContext.yLabel,
  ]);

  // render the Graph component with the retrieved data
  return (
    <div className="font-montserrat mt-16 h-full bg-background-page text-white">
      <Header />
      {dashboardData.fifth_x.length !== 0 &&
        dashboardContext.graphData.xKey &&
        dashboardContext.graphData.yKey &&
        dashboardContext.graphData.title && (
          <div className=" flex h-screen items-center justify-center">
            <div
              className="w-3/4 items-center justify-center rounded-md bg-background-dashboard p-4"
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
                  },
                ]}
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default Graph;
