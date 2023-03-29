import Graphs from "./../components/Graphs";
import { useDashboardData } from "@/hooks/useDashboardData";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import Link from "next/link";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { dashboardData, isLoading, isError } = useDashboardData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

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

  const chartLabelColor = "#a0a1ac";
  const chartBackgroundColor = "rgba(0, 57, 230, 0.5)";
  const chartBorderColor = "blue";
  const xLabel = "Número";
  const yLabel = "Quantidade";

  return (
    <div className="font-montserrat h-full w-full bg-background-page text-white">
      <Header />
      <h2 className="mb-2 mt-10 flex items-center justify-center font-bold">
        DASHBOARD
      </h2>
      <h5 className="mb-10 flex items-center justify-center font-bold">
        Estimativa de Resultados Passados (Quantidade vs. Número de Jogo)
      </h5>
      <div className="flex items-center justify-center pb-20">
        <div className="w-4/5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => {
              const xKey = xKeys[index];
              const yKey = yKeys[index];

              const title = `Posição ${index + 1}`;
              return (
                <>
                  <button>
                    <div
                      className="rounded-md bg-background-dashboard p-4"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: "/graph",
                          query: {
                            xKey,
                            yKey,
                            title,
                            chartLabelColor,
                            chartBackgroundColor,
                            chartBorderColor,
                            xLabel,
                            yLabel,
                            index,
                            dashboardData: encodeURIComponent(
                              JSON.stringify(dashboardData)
                            ),
                          },
                        }}
                      >
                        <Graphs
                          graphData={[
                            {
                              title: title,
                              x: dashboardData[xKey],
                              y: dashboardData[yKey],
                              chartLabelColor: chartLabelColor,
                              chartBackgroundColor: chartBackgroundColor,
                              chartBorderColor: chartBorderColor,
                              xLabel: xLabel,
                              yLabel: yLabel,
                            },
                          ]}
                        />
                      </Link>
                    </div>
                  </button>
                </>
              );
            })}
          </div>
          <div>PROBABILITY DATAA</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
