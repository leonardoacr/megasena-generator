import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";
import Ball from "./Ball";
import { useResultsData } from "@/hooks/useResultsData";
import { useState } from "react";
import { sendDataToBackend } from "@/services/api-post-request";

const Results = () => {
  const { data, isLoading, isError } = useResultsData();
  const [bandwidth, setBandwidth] = useState<number>();
  const [bandwidthLimit, setBandwidthLimit] = useState<boolean>(false);

  const handleNewGame: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault(); // prevent default form submission behavior

    const form = event.currentTarget as HTMLFormElement; // get the form element
    if (form) {
      const formData = new FormData(form); // create a new FormData object with the form data

      try {
        await sendDataToBackend(formData); // wait for the response from the backend
        window.location.reload(); // redirect to homepage
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleBandwidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt((event.target as HTMLInputElement).value);
    setBandwidth(value);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const customButtonClass =
    "mx-4 rounded-lg bg-slate-700 py-2 px-4 text-white hover:bg-slate-800 focus:outline-none";

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
      <div className="mx-4 mt-8 flex flex-col items-center justify-center">
        <div className="mt-16 rounded-md border-2 border-gray-400 p-4">
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
          <form
            className="flex flex-col items-center"
            id="new-game-form"
            action="/"
            method="post"
            onSubmit={handleNewGame}
          >
            <label
              className="mt-2 flex flex-col items-center text-purple-500"
              htmlFor="bandwidth"
            >
              Largura da Faixa
            </label>
            <input
              className="mx-4 flex w-4/6 items-center rounded-lg bg-slate-200 py-2 px-4
               text-black focus:outline-none"
              type="number"
              id="bandwidth"
              name="bandwidth"
              placeholder="(Opcional - Padrão: 10)"
              value={bandwidth}
              min="1"
              max="60"
              onChange={(event) => {
                const value = Number(event.target.value);
                if (value < 1 || value > 60) {
                  setBandwidthLimit(true);
                  handleBandwidthChange(event);
                } else {
                  setBandwidthLimit(false);
                  handleBandwidthChange(event);
                }
              }}
            />
            {bandwidthLimit ? (
              <div className="mt-2 text-red-500">
                A faixa precisa estar entre 1 e 60
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            form="new-game-form"
            className={customButtonClass}
            onClick={() =>
              (
                document.getElementById("new-game-form") as HTMLFormElement
              ).submit()
            }
          >
            Novo Jogo
          </button>

          <button className={customButtonClass}>
            <Link href="/dashboards">Dashboards</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Results;
