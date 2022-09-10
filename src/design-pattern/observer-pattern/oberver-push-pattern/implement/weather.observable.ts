import { ObservablePushAbstract } from "../abstract/observable.push.abstract";
import { NotificationWeatherData, WeatherData } from "./type/weather.type";


export class Weather extends ObservablePushAbstract<WeatherData,NotificationWeatherData>{

  private temperature : number
  private pressure : number
  private location: string

  constructor(weatherData : WeatherData) {
    super();
    Object.assign(this, weatherData)
  }

  getNotificationData():NotificationWeatherData{
    return {
      temperature : this.temperature,
      pressure : this.pressure
    }
  }

  getObjectData(): WeatherData {
    return {
      temperature : this.temperature,
      pressure : this.pressure,
      location: this.location,
    }
  }

  setTemperature(temperature : number):void{
    this.temperature = temperature
    const notificationData: NotificationWeatherData = this.getNotificationData()
    this.notify(notificationData)
  }

}