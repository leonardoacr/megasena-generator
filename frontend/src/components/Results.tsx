import { IData } from "@/types/ResultsDataTypes";
import Ball from "./Ball";

interface ResultsProps {
  data: IData | null;
}

const Results = ({ data }: ResultsProps) => {
  const displayGame = (resultsID: string, color: string) => {
    if (data !== null) {
      const convertDataToInt = data[resultsID]
        .split("[")[1]
        .split("]")[0]
        .split(",")
        .map((num) => parseInt(num.trim()));

      return Array.isArray(convertDataToInt) ? (
        <Ball numbersArray={convertDataToInt} color={color} />
      ) : null;
    }
  };

  return (
    <>
      <h2 className="flex items-center justify-center font-bold">
        JOGO GERADO
      </h2>
      <div className="mt-4 mb-4 flex items-center justify-center">
        {displayGame("your_game", "bg-lime-700")}
      </div>
      {data?.past_result && (
        <>
          <h2 className="flex items-center justify-center font-bold">
            JOGO PASSADO
          </h2>
          <div className="mt-4 mb-4 flex items-center justify-center">
            {displayGame("past_result", "bg-blue-500")}
          </div>
        </>
      )}
      <p>{data?.correct_guesses}</p>
      <p>{data?.game_number}</p>
      <p>{data?.data}</p>
      <p>{data?.type_of_prize}</p>
    </>
  );
};

export default Results;
