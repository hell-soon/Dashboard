import type { Weather } from '~/types/models/weather'

export interface CardPayload extends Weather {
  weatherIcon: string
}

export interface CardSettings {
  cityName: boolean
  temp: boolean
  text: boolean
}

export interface CardProps {
  payload: CardPayload
  settings: CardSettings
}
