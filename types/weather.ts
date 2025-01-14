export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface WeatherListItem {
  dt: number;
  main: WeatherMain;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface CityCoord {
  lat: number;
  lon: number;
}

export interface City {
  coord: CityCoord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface WeatherResponse {
  city: City;
  cod: string;
  message: number;
  cnt: number;
  list: WeatherListItem[];
}

export interface ChartData {
  labels: string[];
  temperatures: number[];
}

export interface ChartProps {
  weatherData: ChartData | undefined;
}
