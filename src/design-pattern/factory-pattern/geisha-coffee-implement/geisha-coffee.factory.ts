import { ICoffeeFactory } from "../interface/coffee.factory.interface";
import { IceWater } from "../resource-implement/ice.water";
import { IBean, ICup, IWater } from "../interface/coffee.resource.interface";
import { JejuBean } from "../resource-implement/jeju.bean";
import { ICoffee } from "../interface/coffee.interface";
import { PaperCup } from "../resource-implement/paper.cup";
import { HotWater } from "../resource-implement/hot.water";
import { GeishaBean } from "../resource-implement/geisha.bean";
import { GeishaCoffee } from "./geisha-coffee";

export class GeishaCoffeeFactory implements ICoffeeFactory{

  constructor() {
  }

  createWater() : HotWater {
    return new HotWater()
  }
  createBean() : GeishaBean {
    return new GeishaBean()
  }
  createCup() : PaperCup {
    return new PaperCup()
  }
  createCoffee() : GeishaCoffee {
    const water = this.createWater();
    const bean = this.createBean();
    const cup = this.createCup()
    return new GeishaCoffee(water,bean,cup)
  }
}