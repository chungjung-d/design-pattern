import { ICoffeeFactory } from "../interface/coffee.factory.interface";
import { IceWater } from "../resource-implement/ice.water";
import { IBean, ICup, IWater } from "../interface/coffee.resource.interface";
import { JejuBean } from "../resource-implement/jeju.bean";
import { ICoffee } from "../interface/coffee.interface";
import { PaperCup } from "../resource-implement/paper.cup";
import { JejuCoffee } from "./jeju-coffee";

export class JejuCoffeeFactory implements ICoffeeFactory{

  constructor() {
  }

  createWater() : IceWater {
    return new IceWater()
  }
  createBean() : JejuBean {
    return new JejuBean()
  }
  createCup() : PaperCup {
    return new PaperCup()
  }
  createCoffee() : JejuCoffee {
    const water = this.createWater();
    const bean = this.createBean();
    const cup = this.createCup()
    return new JejuCoffee(water,bean,cup)
  }
}