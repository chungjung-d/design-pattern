import { IObserver } from "../../interface/observer.interface";
import { ObserverPullAbstract } from "../abstract/observer.pull.abstract";
import { WeatherPull } from "./weather.pull.observable";
import { WeatherPullData } from "./type/weather.pull.type";

export class WeatherLoggerObserver implements ObserverPullAbstract{
  notify(observer : ObserverPullAbstract): void  {
    if(observer instanceof WeatherPull){
      const observerData : WeatherPullData = observer.getObjectData()
      console.log(observerData)
    }
  }
}