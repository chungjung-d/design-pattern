import { ICoffee } from "../interface/coffee.interface";
import { IBean, ICup, IWater } from "../interface/coffee.resource.interface";
import { IceWater } from "../resource-implement/ice.water";
import { GeishaBean } from "../resource-implement/geisha.bean";
import { PaperCup } from "../resource-implement/paper.cup";
import { HotWater } from "../resource-implement/hot.water";

export class GeishaCoffee implements ICoffee{
  bean: GeishaBean;
  cup: PaperCup;
  water: HotWater;

  constructor( water : HotWater, bean : GeishaBean, cup : PaperCup) {
    this.cup = cup;
    this.water = water;
    this.bean = bean;
  }

}