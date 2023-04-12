import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import Results from "../components/Results";
import { sendDataToBackend } from "@/services/api-post-request";
import { useResultsData } from "@/hooks/useResultsData";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const { data, isLoading, isError } = useResultsData();
  const [bandwidth, setBandwidth] = useState<number>();
  const [bandwidthLimit, setBandwidthLimit] = useState<boolean>(false);

  const handleNewGame: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);

      try {
        const newUrl = await sendDataToBackend(formData);
        window.location.href = newUrl;
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
    return <div>Erro carregando dados da API...</div>;
  }

  const customButtonClass = `mx-4 rounded-lg bg-slate-700 py-2 px-4 text-white 
    hover:bg-slate-800 focus:outline-none`;

  return (
    <div className="font-montserrat h-screen bg-background-page text-white">
      <Header />
      <div className="mx-4 mt-8 flex flex-col items-center justify-center">
        <div className="mt-16 rounded-md border-2 border-gray-400 p-4">
          <Results data={data} />
          <form
            className="flex flex-col items-center"
            id="new-game-form"
            action="/"
            method="post"
            onSubmit={handleNewGame}
            data-testid="new-game-form"
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
          <button data-testid="dashboardButton" className={customButtonClass}>
            <Link href="/dashboards">Dashboards</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
