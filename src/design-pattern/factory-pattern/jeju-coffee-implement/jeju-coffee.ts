import { ICoffee } from "../interface/coffee.interface";
import { IBean, ICup, IWater } from "../interface/coffee.resource.interface";
import { HotWater } from "../resource-implement/hot.water";
import { JejuBean } from "../resource-implement/jeju.bean";
import { PaperCup } from "../resource-implement/paper.cup";

export class JejuCoffee implements ICoffee{
  bean: JejuBean;
  cup: PaperCup;
  water: HotWater;

  constructor( water : HotWater, bean : JejuBean, cup : PaperCup) {
    this.cup = cup;
    this.water = water;
    this.bean = bean;
  }

}