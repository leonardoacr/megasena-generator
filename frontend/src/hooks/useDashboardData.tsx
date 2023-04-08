import { useEffect, useState } from "react";
import { getDashboardData } from "@/services/api-get-request";
import {
  IDashboardData,
  IDashboardStateData,
} from "@/types/DashboardDataTypes";

export const xKeys = [
  "first_x",
  "second_x",
  "third_x",
  "fourth_x",
  "fifth_x",
  "sixth_x",
];
export const yKeys = [
  "first_y",
  "second_y",
  "third_y",
  "fourth_y",
  "fifth_y",
  "sixth_y",
];

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
        const data = await getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("API request error (Dashboard Data).", error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { dashboardData, isLoading, isError };
};
