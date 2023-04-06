import {
  DashboardContext,
  IDashboardContext,
} from "@/contexts/DashboardContext";
import { useDashboardData } from "@/hooks/useDashboardData";
import Link from "next/link";
import { useContext } from "react";
import Graphs from "./Graphs";
import LoadingSpinner from "./LoadingSpinner";

const Dashboard = () => {
  const dashboardContext = useContext<IDashboardContext>(DashboardContext);

  const { dashboardData, isLoading, isError } = useDashboardData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const handleClick = (
    xKey: string,
    yKey: string,
    title: string,
    index: number
  ) => {
    console.log("Dashboard component");
    console.log(dashboardData);
    console.log(dashboardContext.graphData);
    dashboardContext.setPassDashboardData(dashboardData);
    dashboardContext.setGraphData(xKey, yKey, title, index);
  };

  const xKeys = [
    "first_x",
    "second_x",
    "third_x",
    "fourth_x",
    "fifth_x",
    "sixth_x",
  ];
  const yKeys = [
    "first_y",
    "second_y",
    "third_y",
    "fourth_y",
    "fifth_y",
    "sixth_y",
  ];

  return (
    <div className="w-4/5">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {Array.from({ length: 6 }, (_, index) => {
          const xKey = xKeys[index];
          const yKey = yKeys[index];
          const title = `Posição ${index + 1}`;

          return (
            <button
              key={index}
              onClick={() => handleClick(xKey, yKey, title, index)}
            >
              <div className="rounded-md bg-background-dashboard p-2">
                <Link href="/graph">
                  <Graphs
                    graphData={[
                      {
                        title,
                        x: dashboardData[xKey],
                        y: dashboardData[yKey],
                        chartLabelColor: dashboardContext.chartLabelColor,
                        chartBackgroundColor:
                          dashboardContext.chartBackgroundColor,
                        chartBorderColor: dashboardContext.chartBorderColor,
                        xLabel: dashboardContext.xLabel,
                        yLabel: dashboardContext.yLabel,
                      },
                    ]}
                  />
                </Link>
              </div>
            </button>
          );
        })}
      </div>
      <div>PROBABILITY DATA</div>
    </div>
  );
};

export default Dashboard;
