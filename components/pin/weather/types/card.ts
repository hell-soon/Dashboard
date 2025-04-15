import type { Weather } from '~/types/models/weather'

export interface WeatherCardData extends Weather {
  weatherIcon: string
}

export interface WeatherCardSettings {
  cityName: boolean
  temp: boolean
  text: boolean
}

export interface WeatherCardSettingOption {
  key: keyof WeatherCardSettings
  label: string
}

export interface WeatherCardProps {
  payload: WeatherCardData
  settings: WeatherCardSettings
}
