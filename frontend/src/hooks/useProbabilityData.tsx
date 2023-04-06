import { useEffect, useState } from "react";
import { getProbabilityData } from "@/services/api-get-request";

export interface IProbabilityData {
  [key: string]: number[];
  upper_limit_array: number[];
  new_probability_array: number[];
  new_probability_percentage_array: number[];
}

interface IProbabilityStateData {
  probabilityData: IProbabilityData;
}

export const useProbabilityData = (): IProbabilityStateData => {
  const [probabilityData, setProbabilityData] = useState<IProbabilityData>({
    upper_limit_array: [],
    new_probability_array: [],
    new_probability_percentage_array: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProbabilityData();
        setProbabilityData(data);
      } catch (error) {
        console.error("API request error (Probability Data).", error);
      }
    };
    fetchData();
  }, []);

  return { probabilityData };
};
