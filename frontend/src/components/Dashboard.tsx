import {
  DashboardContext,
  IDashboardContext,
} from "@/contexts/DashboardContext";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useProbabilityData } from "@/hooks/useProbabilityData";
import Link from "next/link";
import { useContext } from "react";
import Graphs from "./Graphs";
import LoadingSpinner from "./LoadingSpinner";

const Dashboard = () => {
  const dashboardContext = useContext<IDashboardContext>(DashboardContext);

  const { dashboardData, isLoading, isError } = useDashboardData();

  const { probabilityData } = useProbabilityData();

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
              <div className="mt-10 rounded-md bg-background-dashboard p-2">
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
                        graphType: "Bar",
                      },
                    ]}
                  />
                </Link>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-16 rounded-md bg-background-dashboard p-2">
        <Graphs
          graphData={[
            {
              title: "Probabilidade teórica por frequência histórica",
              x: probabilityData.upper_limit_array,
              y: probabilityData.new_probability_array,
              chartLabelColor: dashboardContext.chartLabelColor,
              chartBackgroundColor: dashboardContext.chartBackgroundColor,
              chartBorderColor: "white",
              xLabel: dashboardContext.xLabel,
              yLabel: dashboardContext.yLabel,
              graphType: "Line",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
