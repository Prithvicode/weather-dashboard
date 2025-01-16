"use client";

import useWeatherData from "@/hooks/useWeatherData";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import TodayCard from "./TodayCard";

interface WeatherMainProps {
  city: string;
}

export default function WeatherMain({ city }: WeatherMainProps) {
  const { weatherData, currentWeatherData, loading, error } =
    useWeatherData(city);

  if (loading) {
    return <div>Loading chart data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>No chart data available</div>;
  }

  return (
    <>
      <section className="flex gap-8 flex-col p-10">
        <div>
          <h1 className="font-bold text-lg text-blue-950">Today Overview</h1>
          <TodayCard currentWeatherData={currentWeatherData} />
        </div>
        <div>
          <h1 className="font-bold text-lg text-blue-950">
            Average Weekly Temperature
          </h1>
          <div className="md:flex md:gap-10 md:justify-between">
            <BarChart weatherData={weatherData} />
            <LineChart weatherData={weatherData} />
          </div>
        </div>
      </section>
    </>
  );
}
