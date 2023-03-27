import Graphs from "@/components/Graphs";
import Header from "@/components/Header";
import { IDashboardData } from "@/hooks/useDashboardData";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Graph = () => {
  const router = useRouter();

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

  // retrieve the query parameters
  const xKey = router.query.xKey as string;
  const yKey = router.query.yKey as string;
  const title = router.query.title as string;
  const index = Number(router.query.index);
  const retrieveDashboardDataQuery = router.query.dashboardData
    ? JSON.parse(decodeURIComponent(router.query.dashboardData as string))
    : null;

  useEffect(() => {
    // retrieve saved dashboardData from local storage
    const savedDashboardData = localStorage.getItem("dashboardData");
    if (savedDashboardData) {
      setDashboardData(JSON.parse(savedDashboardData));
    } else if (retrieveDashboardDataQuery?.fifth_x?.length !== 0) {
      setDashboardData(retrieveDashboardDataQuery);
      localStorage.setItem(
        "dashboardData",
        JSON.stringify(retrieveDashboardDataQuery)
      );
    }
  }, []);

  // render the Graph component with the retrieved data
  return (
    <div className="font-montserrat h-full bg-background-page text-white">
      <Header />
      {dashboardData.fifth_x.length !== 0 && xKey && yKey && title && (
        <div className=" flex h-screen items-center justify-center">
          <div
            className="w-3/4 items-center justify-center rounded-md bg-background-dashboard p-4"
            key={index}
          >
            <Graphs
              graphData={[
                {
                  title: title,
                  x: dashboardData[xKey],
                  y: dashboardData[yKey],
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
