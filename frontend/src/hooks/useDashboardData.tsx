import { useEffect, useState } from "react";
import { getApiData } from "@/services/api-get-request";

export interface IDashboardData {
  [key: string]: number[];
  first_x: number[];
  first_y: number[];
  second_x: number[];
  second_y: number[];
  third_x: number[];
  third_y: number[];
  fourth_x: number[];
  fourth_y: number[];
  fifth_x: number[];
  fifth_y: number[];
  sixth_x: number[];
  sixth_y: number[];
}

interface IDashboardStateData {
  dashboardData: IDashboardData;
  isLoading: boolean;
  isError: boolean;
}

export const useDashboardData = (): IDashboardStateData => {
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApiData("dashboard-data");
        setDashboardData(data);
      } catch (error) {
        console.error("API request error.", error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { dashboardData, isLoading, isError };
};
