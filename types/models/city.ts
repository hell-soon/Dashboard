export interface City {
  address: Address
  addresstype: string
  boundingbox: string[]
  class: string
  display_name: string
  importance: number
  lat: string
  licence: string
  lon: string
  name: string
  osm_id: number
  osm_type: string
  place_id: number
  place_rank: number
  type: string
}

interface Address {
  city: string
  city_district: string
  country: string
  country_code: string
  county: string
  postcode: string
  region: string
  state: string
}
