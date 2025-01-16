import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartProps } from "@/types/weather";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ weatherData }: ChartProps) {
  if (!weatherData) return <div>No weather data available</div>;

  const chartData = {
    labels: weatherData.labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.temperatures,
        backgroundColor: "rgba(48, 98, 219, 0.5)",
        borderColor: "rgba(48, 98, 219, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Daily Temperatures",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
        min: 0,
      },
    },
  };

  return (
    <div className="h-[200px] max-w-md">
      <Bar options={options} data={chartData} className="size-full" />
    </div>
  );
}
