import { Bar, Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React, { useRef } from "react";
import { DashboardProps } from "@/types/DashboardDataTypes";

Chart.register(CategoryScale);

const Graphs = ({ graphData }: DashboardProps) => {
  const chartRefs = useRef<(Chart<"line" | "bar", unknown> | null)[]>([]);

  // const handleDownload = (index: number) => {
  //   const canvas = chartRefs.current[index]?.canvas;
  //   if (canvas) {
  //     const dataURL = canvas.toDataURL("image/png");
  //     const link = document.createElement("a");
  //     link.download = `${graphData[index].title}.png`;
  //     link.href = dataURL;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   }
  // };

  const datasets = graphData.map(
    ({ x, y, chartBorderColor, chartBackgroundColor }) => ({
      data: y.map((yVal: number, index: number) => ({ x: x[index], y: yVal })),
      borderWidth: 0.5,
      borderColor: chartBorderColor,
      backgroundColor: chartBackgroundColor,
    })
  );

  const chartData = {
    labels: datasets[0].data.map(({ x }) => x),
    datasets,
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: graphData[0].title,
        color: "white",
        font: {
          size: 14,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: graphData[0].xLabel,
          color: graphData[0].chartLabelColor,
        },
        grid: {
          display: false,
          color: "white",
        },
        ticks: {
          color: graphData[0].chartLabelColor,
        },
      },
      y: {
        title: {
          display: true,
          text: graphData[0].yLabel,
          color: graphData[0].chartLabelColor,
        },
        ticks: {
          color: graphData[0].chartLabelColor,
        },
      },
    },
  };

  const ChartComponent = graphData[0].graphType === "Line" ? Line : Bar;

  return (
    <div data-testid="graphRendered">
      {graphData.map((_, index) => (
        <div key={index}>
          <ChartComponent
            ref={(chart: any) => (chartRefs.current[index] = chart)}
            data={chartData}
            options={chartOptions}
          />
          {/* <button
            className="my-2 inline-flex items-center rounded bg-slate-600 py-1 px-4 text-white hover:bg-gray-500"
            onClick={() => handleDownload(index)}
          >
            <svg
              className="h-6 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default Graphs;
