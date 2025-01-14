import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartProps } from "@/types/weather";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ weatherData }: ChartProps) {
  if (!weatherData) {
    return <div>No data available for the chart.</div>;
  }

  const chartData = {
    labels: weatherData.labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.temperatures,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" as const },
      title: { display: true, text: `Temperature Over Time` },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Temperature (°C)" } },
    },
  };

  return (
    <div className="">
      <Line data={chartData} options={options} />
    </div>
  );
}
