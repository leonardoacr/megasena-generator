import { useEffect, useState } from "react";
import { getResultsData } from "@/services/api-get-request";
import { IData, IResultsStateData } from "@/types/ResultsDataTypes";

export const useResultsData = (): IResultsStateData => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResultsData();
        setData(data);
      } catch (error) {
        console.error("API request error.", error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, isLoading, setIsLoading, isError };
};
