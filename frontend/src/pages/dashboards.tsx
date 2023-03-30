import Header from "@/components/Header";
import React from "react";
import Dashboard from "@/components/Dashboard";

const Dashboards = () => {
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
        <Dashboard />
      </div>
    </div>
  );
};

export default Dashboards;
