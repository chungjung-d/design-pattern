import { ICoffee } from "./coffee.interface";

export interface ICoffeeStore<Coffee extends ICoffee>{
  createCoffee() : Coffee
}