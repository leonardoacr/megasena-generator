import React from "react";
import Header from "../components/Header";
import Results from "../components/Results";

export default function Home() {
  return (
    <div className="font-montserrat h-screen bg-background-page text-white ">
      <Header />
      <Results />
    </div>
  );
}
