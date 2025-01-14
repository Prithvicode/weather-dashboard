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
        backgroundColor: "rgba(0, 0, 139, 0.5)",
        borderColor: "rgba(0, 0, 128, 1)",
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
    <div className="">
      <Bar options={options} data={chartData} />
    </div>
  );
}
