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
        borderColor: "rgba(24, 53, 98, 1)",
        backgroundColor: "rgba(24, 53, 98, 0.8)",
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
    <div className="h-[200px] max-w-sm">
      <Line data={chartData} options={options} className="size-full" />
    </div>
  );
}
