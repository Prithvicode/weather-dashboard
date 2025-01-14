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
      <section className="flex gap-8">
        <TodayCard currentWeatherData={currentWeatherData} />
        <BarChart weatherData={weatherData} />
        <LineChart weatherData={weatherData} />;
      </section>
    </>
  );
}
