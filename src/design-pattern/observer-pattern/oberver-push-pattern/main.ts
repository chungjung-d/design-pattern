import { Weather } from "./implement/weather.observable";
import { WeatherData } from "./implement/type/weather.type";
import { IObservable } from "../interface/observable.interface";
import { IObserver } from "../interface/observer.interface";
import { WeatherLoggerObserver } from "./implement/weather-logger.observer";
import { HeatWaveAdvisoryObserver } from "./implement/heat-wave-advisory.observer";

const weatherData :WeatherData = {
  temperature : 35,
  pressure : 25,
  location : "seoul"
}

const weather : Weather = new Weather(weatherData);
const observer_1 : IObserver = new WeatherLoggerObserver();
const observer_2 : IObserver = new HeatWaveAdvisoryObserver();

weather.subscribe(observer_1)

weather.subscribe(observer_2)
weather.setTemperature(20)
weather.setTemperature(80)