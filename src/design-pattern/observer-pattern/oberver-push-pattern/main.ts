
import { WeatherLoggerObserver } from "./implement/weather-logger.observer";
import { HeatWaveAdvisoryObserver } from "./implement/heat-wave-advisory.observer";
import { WeatherPullData } from "./implement/type/weather.pull.type";
import { WeatherPull } from "./implement/weather.pull.observable";


const weatherData :WeatherPullData = {
  temperature : 35,
  pressure : 25,
  location : "seoul"
}

const weather : WeatherPull = new WeatherPull(weatherData);
const observer_1 : HeatWaveAdvisoryObserver = new WeatherLoggerObserver();
const observer_2 : WeatherLoggerObserver = new HeatWaveAdvisoryObserver();

weather.subscribe(observer_1)
weather.subscribe(observer_2)
weather.setTemperature(20)
weather.setTemperature(80)