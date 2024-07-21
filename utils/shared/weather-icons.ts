function getWeatherIcon(nameIcon: string) {
  switch (nameIcon.toLowerCase()) {
    case 'sunny':
      return 'meteocons:clear-day'
    case 'clear':
      return 'meteocons:clear-night'
    case 'partly cloudy':
      return 'meteocons:partly-cloudy-day'
    case 'cloudy':
      return 'meteocons:cloudy'
    case 'overcast':
      return 'meteocons:overcast'
    case 'mist':
      return 'meteocons:mist'
    case 'patchy rain possible':
      return 'meteocons:extreme-rain'
    case 'patchy snow possible':
      return 'meteocons:extreme-snow'
    case 'patchy rain nearby':
      return 'meteocons:extreme-rain'
    case 'patchy sleet possible':
      return 'meteocons:extreme-sleet'
    case 'patchy freezing drizzle possible':
      return 'meteocons:extreme-sleet'
    case 'thundery outbreaks possible':
      return 'meteocons:thunderstorms-extreme'
    case 'blowing snow':
      return 'meteocons:snow'
    case 'blizzard':
      return 'meteocons:blizzard'
    case 'fog':
      return 'meteocons:fog'
    case 'freezing fog':
      return 'meteocons:fog'
    case 'patchy light drizzle':
      return 'meteocons:extreme-day-rain'
    case 'light drizzle':
      return 'meteocons:extreme-day-rain'
    case 'freezing drizzle':
      return 'meteocons:extreme-day-sleet'
    case 'heavy freezing drizzle':
      return 'meteocons:extreme-day-sleet'
    case 'patchy light rain':
      return 'meteocons:extreme-day-rain'
    case 'light rain':
      return 'meteocons:extreme-day-rain'
    case 'moderate rain at times':
      return 'meteocons:extreme-day-rain'
    case 'moderate rain':
      return 'meteocons:extreme-day-rain'
    case 'heavy rain at times':
      return 'meteocons:extreme-day-rain'
    case 'heavy rain':
      return 'meteocons:extreme-day-rain'
    case 'light freezing rain':
      return 'meteocons:extreme-day-sleet'
    case 'moderate or heavy freezing rain':
      return 'meteocons:extreme-day-sleet'
    case 'light sleet':
      return 'meteocons:extreme-day-sleet'
    case 'moderate or heavy sleet':
      return 'meteocons:extreme-day-sleet'
    case 'patchy light snow':
      return 'meteocons:extreme-day-snow'
    case 'light snow':
      return 'meteocons:extreme-day-snow'
    case 'patchy moderate snow':
      return 'meteocons:extreme-day-snow'
    case 'moderate snow':
      return 'meteocons:extreme-day-snow'
    case 'patchy heavy snow':
      return 'meteocons:extreme-day-snow'
    case 'heavy snow':
      return 'meteocons:extreme-day-snow'
    case 'ice pellets':
      return 'meteocons:snow'
    case 'light rain shower':
      return 'meteocons:extreme-day-rain'
    case 'moderate or heavy rain shower':
      return 'meteocons:extreme-day-rain'
    case 'torrential rain shower':
      return 'meteocons:extreme-day-rain'
    case 'light sleet showers':
      return 'meteocons:extreme-day-sleet'
    case 'moderate or heavy sleet showers':
      return 'meteocons:extreme-day-sleet'
    case 'light snow showers':
      return 'meteocons:extreme-day-snow'
    case 'moderate or heavy snow showers':
      return 'meteocons:extreme-day-snow'
    case 'light showers of ice pellets':
      return 'meteocons:snow'
    case 'moderate or heavy showers of ice pellets':
      return 'meteocons:snow'
    case 'patchy light rain with thunder':
      return 'meteocons:thunderstorms-extreme'
    case 'moderate or heavy rain with thunder':
      return 'meteocons:thunderstorms-extreme'
    case 'patchy light snow with thunder':
      return 'meteocons:thunderstorms-extreme'
    case 'moderate or heavy snow with thunder':
      return 'meteocons:thunderstorms-extreme'
  }
}

export default getWeatherIcon as typeof getWeatherIcon
