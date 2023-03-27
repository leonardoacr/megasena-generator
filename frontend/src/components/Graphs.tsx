import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React from "react";

interface GraphData {
  title: string;
  x: number[];
  y: number[];
  chartLabelColor: string;
  chartBackgroundColor: string;
  chartBorderColor: string;
  xLabel: string;
  yLabel: string;
}

interface DashboardProps {
  graphData: GraphData[];
}

Chart.register(CategoryScale);

const Graphs = ({ graphData }: DashboardProps) => {
  const datasets = graphData.map(
    ({ x, y, chartBorderColor, chartBackgroundColor }) => ({
      data: y.map((yVal, index) => ({ x: x[index], y: yVal })),
      borderWidth: 1,
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

  return <Bar data={chartData} options={chartOptions} />;
};

export default Graphs;
