import { useEffect, useState } from "react";
import { getResultsData } from "@/services/api-get-request";

export interface IData {
  [key: string]: string;
  your_game: string;
  correct_guesses: string;
  game_number: string;
  past_result: string;
  data: string;
  type_of_prize: string;
}

interface IResultsStateData {
  data: IData | null;
  isLoading: boolean;
  isError: boolean;
}

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

  return { data, isLoading, isError };
};
