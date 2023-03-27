import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

interface DashboardProps {
  graphData: { title: string; x: number[]; y: number[] }[];
}

const chartLabelColor = "#a0a1ac";
const chartBackgroundColor = "rgba(0, 57, 230, 0.5)";
const chartBorderColor = "blue";

Chart.register(CategoryScale);

const Graphs = ({ graphData }: DashboardProps) => {
  let globalTitle = "";
  const sortedData = graphData.map((item) => {
    const sortedXY = item.x
      .map((xVal, index) => ({ x: xVal, y: item.y[index] }))
      .sort((a, b) => a.x - b.x);
    const sortedX = sortedXY.map((item) => item.x);
    const sortedY = sortedXY.map((item) => item.y);

    globalTitle = item.title;

    return {
      data: sortedY.map((yVal, index) => ({ x: sortedX[index], y: yVal })),
      borderWidth: 1,
      borderColor: chartBorderColor,
      backgroundColor: chartBackgroundColor, // Set the background color of the bars to green
    };
  });

  const chartData = {
    // Use sorted x values from first item as labels
    labels: sortedData[0].data.map((dataPoint) => dataPoint.x),
    datasets: sortedData,
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: globalTitle,
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
          text: "Número",
          color: chartLabelColor,
        },
        grid: {
          display: false,
          color: "white",
        },
        ticks: {
          color: chartLabelColor,
        },
      },
      y: {
        title: {
          display: true,
          text: "Quantidade",
          color: chartLabelColor,
        },
        ticks: {
          color: chartLabelColor,
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default Graphs;
