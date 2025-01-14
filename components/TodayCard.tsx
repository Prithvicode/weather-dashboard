import { WeatherListItem } from "@/types/weather";

interface TodayCardProps {
  currentWeatherData: WeatherListItem | null;
}
export default function TodayCard({ currentWeatherData }: TodayCardProps) {
  console.log(currentWeatherData);
  const iconUrl = `http://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`;
  return (
    <>
      {/* Shadcn card */}
      <div className="border-2 p-6 bg-gray-400 flex justify-center items-center flex-col">
        <h1>Todays Overview:</h1>
        <img src={iconUrl} alt="Weather Icon" />
        <h1 className="text-3xl">{currentWeatherData?.main.temp} °C</h1>
        <h1>{currentWeatherData?.weather[0].main}</h1>
        <h1>{currentWeatherData?.weather[0].description}</h1>
      </div>
    </>
  );
}
