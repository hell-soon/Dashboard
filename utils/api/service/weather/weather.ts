import type { Weather as WeatherResponse } from "~/types/models/weather";
import type { WeatherParams } from "./weather.type";

export function getWeather(params?: WeatherParams) {
  return getReq<WeatherResponse>('', params)
}
