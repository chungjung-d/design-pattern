import { IObserver } from "../../interface/observer.interface";
import { NotificationWeatherData } from "./type/weather.type";

export class HeatWaveAdvisoryObserver implements IObserver{
  notify(notifyData: NotificationWeatherData): void {

    if(notifyData.temperature > 50 ){
      console.log("Too Hot!!!!!!!")
    }
  }
}