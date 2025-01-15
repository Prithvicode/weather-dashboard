import { WeatherListItem } from "@/types/weather";
import DetailCard from "./DetailCard";

interface TodayCardProps {
  currentWeatherData: WeatherListItem | null;
}
export default function TodayCard({ currentWeatherData }: TodayCardProps) {
  console.log(currentWeatherData);
  const iconUrl = `http://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`;
  return (
    <>
      <div className="max-w-md">
        {/* Weather Card */}
        <div className="">
          <div className="p-6 bg-gradient-to-b from-blue-900 to-blue-950 flex justify-between items-end text-white ">
            <div>
              <img src={iconUrl} alt="Weather Icon" width={60} />
              <h1 className="text-4xl">{currentWeatherData?.main.temp} °C</h1>
            </div>
            <div className="flex flex-col">
              <h1>{currentWeatherData?.weather[0].main}</h1>
              <h1>{currentWeatherData?.weather[0].description}</h1>
            </div>
          </div>

          {/* Details */}
          <div className="flex">
            <DetailCard
              title="Winds Speed"
              value={currentWeatherData?.wind.speed}
              unit={"Km/h"}
              imgUrl="/wind.svg"
            />
            <DetailCard
              title="Pressure"
              value={currentWeatherData?.main.pressure}
              unit={"hpa"}
              imgUrl="/pressure.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
