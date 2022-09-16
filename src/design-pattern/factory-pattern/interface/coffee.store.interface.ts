import { ICoffeeFactory } from "./coffee.factory.interface";

export interface ICoffeeStore<Coffee extends ICoffeeFactory>{
  createCoffee() : Coffee
}