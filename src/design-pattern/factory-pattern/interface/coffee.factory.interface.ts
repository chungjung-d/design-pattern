import { IBean, ICup, IWater } from "./coffee.resource.interface";
import { ICoffee } from "./coffee.interface";

export interface ICoffeeFactory{
  createWater() : IWater
  createBean() : IBean
  createCup() : ICup
  createCoffee(water : IWater, bean:IBean, cup : ICup) : ICoffee
}