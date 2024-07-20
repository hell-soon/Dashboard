function getWeatherIcon(nameIcon: string) {
  switch (nameIcon) {
    case 'Sunny':
      return 'meteocons:clear-day'
    case 'Clear':
      return 'meteocons:clear-night'
    case 'Partly Cloudy':
      return 'meteocons:partly-cloudy-day'
    case 'Cloudy':
      return 'meteocons:cloudy'
    case 'Overcast':
      return 'meteocons:overcast'
    case 'Mist':
      return 'meteocons:mist'
    case 'Patchy rain possible':
      return 'meteocons:extreme-rain'
    case 'Patchy snow possible':
      return 'meteocons:extreme-snow'
    case 'Patchy sleet possible':
      return 'meteocons:extreme-sleet'
    case 'Patchy freezing drizzle possible':
      return 'meteocons:extreme-sleet'
    case 'Thundery outbreaks possible':
      return 'meteocons:thunderstorms-extreme'
    case 'Blowing snow':
      return 'meteocons:snow'
    case 'Blizzard':
      return 'meteocons:blizzard'
    case 'Fog':
      return 'meteocons:fog'
    case 'Freezing fog':
      return 'meteocons:fog'
    case 'Patchy light drizzle':
      return 'meteocons:extreme-day-rain'
    case 'Light drizzle':
      return 'meteocons:extreme-day-rain'
    case 'Freezing drizzle':
      return 'meteocons:extreme-day-sleet'
    case 'Heavy freezing drizzle':
      return 'meteocons:extreme-day-sleet'
    case 'Patchy light rain':
      return 'meteocons:extreme-day-rain'
    case 'Light rain':
      return 'meteocons:extreme-day-rain'
    case 'Moderate rain at times':
      return 'meteocons:extreme-day-rain'
    case 'Moderate rain':
      return 'meteocons:extreme-day-rain'
    case 'Heavy rain at times':
      return 'meteocons:extreme-day-rain'
    case 'Heavy rain':
      return 'meteocons:extreme-day-rain'
    case 'Light freezing rain':
      return 'meteocons:extreme-day-sleet'
    case 'Moderate or heavy freezing rain':
      return 'meteocons:extreme-day-sleet'
    case 'Light sleet':
      return 'meteocons:extreme-day-sleet'
    case 'Moderate or heavy sleet':
      return 'meteocons:extreme-day-sleet'
    case 'Patchy light snow':
      return 'meteocons:extreme-day-snow'
    case 'Light snow':
      return 'meteocons:extreme-day-snow'
    case 'Patchy moderate snow':
      return 'meteocons:extreme-day-snow'
    case 'Moderate snow':
      return 'meteocons:extreme-day-snow'
    case 'Patchy heavy snow':
      return 'meteocons:extreme-day-snow'
    case 'Heavy snow':
      return 'meteocons:extreme-day-snow'
    case 'Ice pellets':
      return 'meteocons:snow'
    case 'Light rain shower':
      return 'meteocons:extreme-day-rain'
    case 'Moderate or heavy rain shower':
      return 'meteocons:extreme-day-rain'
    case 'Torrential rain shower':
      return 'meteocons:extreme-day-rain'
    case 'Light sleet showers':
      return 'meteocons:extreme-day-sleet'
    case 'Moderate or heavy sleet showers':
      return 'meteocons:extreme-day-sleet'
    case 'Light snow showers':
      return 'meteocons:extreme-day-snow'
    case 'Moderate or heavy snow showers':
      return 'meteocons:extreme-day-snow'
    case 'Light showers of ice pellets':
      return 'meteocons:snow'
    case 'Moderate or heavy showers of ice pellets':
      return 'meteocons:snow'
    case 'Patchy light rain with thunder':
      return 'meteocons:thunderstorms-extreme'
    case 'Moderate or heavy rain with thunder':
      return 'meteocons:thunderstorms-extreme'
    case 'Patchy light snow with thunder':
      return 'meteocons:thunderstorms-extreme'
    case 'Moderate or heavy snow with thunder':
      return 'meteocons:thunderstorms-extreme'
  }
}

export default getWeatherIcon as typeof getWeatherIcon
