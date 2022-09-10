
import { ObservablePullAbstract } from "../abstract/observable.pull.abstract";
import { WeatherPullData } from "./type/weather.pull.type";


export class WeatherPull extends ObservablePullAbstract<WeatherPullData>{

  private temperature : number
  private pressure : number
  private location: string

  constructor(weatherData : WeatherPullData) {
    super();
    Object.assign(this, weatherData)
  }

  getObjectData(): WeatherPullData {
    return {
      temperature : this.temperature,
      pressure : this.pressure,
      location: this.location,
    }
  }

  setTemperature(temperature : number):void{
    this.temperature = temperature
    this.notify()
  }

}