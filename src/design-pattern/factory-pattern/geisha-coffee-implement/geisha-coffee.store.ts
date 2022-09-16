import { ICoffeeStore } from "../interface/coffee.store.interface";
import { GeishaCoffee } from "./geisha-coffee";
import { GeishaCoffeeFactory } from "./geisha-coffee.factory";
import { JejuCoffee } from "../jeju-coffee-implement/jeju-coffee";
import { JejuCoffeeFactory } from "../jeju-coffee-implement/jeju-coffee.factory";

export class GeishaCoffeeStore implements ICoffeeStore<GeishaCoffee>{

  createCoffee(): GeishaCoffee {
    const geishaCoffeeFactory = new GeishaCoffeeFactory()
    return geishaCoffeeFactory.createCoffee()
  }

}