import { ICoffeeStore } from "../interface/coffee.store.interface";
import { JejuCoffeeFactory } from "./jeju-coffee.factory";
import { JejuCoffee } from "./jeju-coffee";

export class JejuCoffeeStore implements ICoffeeStore<JejuCoffee>{

  constructor() { }
  createCoffee(): JejuCoffee {
    const jejuCoffeeFactory =  new JejuCoffeeFactory()
    return jejuCoffeeFactory.createCoffee()
  }

}