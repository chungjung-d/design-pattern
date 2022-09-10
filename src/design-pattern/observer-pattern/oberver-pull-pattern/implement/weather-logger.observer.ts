import { IObserver } from "../../interface/observer.interface";
import { NotificationWeatherData } from "./type/weather.type";

export class WeatherLoggerObserver implements IObserver{
  notify(notifyData: NotificationWeatherData): void {
    console.log("WeatherData Changed \nPressure: " + notifyData.pressure +' \nTemp: ' +notifyData.temperature)
  }
}