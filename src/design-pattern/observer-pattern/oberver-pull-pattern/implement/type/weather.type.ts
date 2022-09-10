export type WeatherData = {
  temperature : number,
  pressure : number,
  location: string,
}

export type NotificationWeatherData = Pick<WeatherData, 'temperature'|'pressure'>