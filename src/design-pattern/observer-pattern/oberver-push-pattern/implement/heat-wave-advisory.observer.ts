import { IObserver } from "../../interface/observer.interface";
import { ObserverPullAbstract } from "../abstract/observer.pull.abstract";
import { WeatherPull } from "./weather.pull.observable";
import { WeatherPullData } from "./type/weather.pull.type";

export class HeatWaveAdvisoryObserver implements ObserverPullAbstract{
  notify(observer : ObserverPullAbstract): void {
    if(observer instanceof WeatherPull){
      const observerData : WeatherPullData = observer.getObjectData()
      if(observerData.temperature>50){
        console.log("HOTTTTTTTTTTTTTT");
      }
    }
  }
}