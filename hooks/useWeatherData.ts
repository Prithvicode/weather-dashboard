"use client";

import { ChartData, WeatherListItem, WeatherResponse } from "@/types/weather";

import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

const getWeatherChartData = (list: WeatherListItem[]) => {
  const labels = list.map((item) => item.dt_txt.split(" ")[0]);
  const temperatures = list.map((item) => item.main.temp);

  return { labels, temperatures };
};

export default function useWeatherData(city: string) {
  const [weatherData, setWeatherData] = useState<ChartData | null>(null);
  const [currentWeatherData, setCurrentWeatherData] =
    useState<WeatherListItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Error fetching weather data.");
        }

        const data: WeatherResponse = await response.json();

        if (data && data.list) {
          const uniqueDates = new Set<string>();
          const filteredData = data.list.filter((item: WeatherListItem) => {
            const date = item.dt_txt.split(" ")[0]; // Extract the date (YYYY-MM-DD) from datetime
            if (uniqueDates.has(date)) return false;
            uniqueDates.add(date);
            return true;
          });

          const chartData = getWeatherChartData(filteredData);
          setWeatherData(chartData);
          setCurrentWeatherData(data.list[0]);

          //   console.log(data.list[0]);
          //   console.log(filteredData);
          //   console.log(data);
        } else {
          setError("Failed to fetch weather data.");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weatherData, currentWeatherData, loading, error };
}
