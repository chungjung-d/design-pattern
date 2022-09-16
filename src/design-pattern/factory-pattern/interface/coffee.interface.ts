import { IBean, ICup, IWater } from "./coffee.resource.interface";

export interface ICoffee {
  water : IWater
  bean : IBean
  cup : ICup
}