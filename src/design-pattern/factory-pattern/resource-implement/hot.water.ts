import { IWater } from "../interface/coffee.resource.interface";

export class HotWater implements IWater{
  explanation: string;
  constructor() {
    this.explanation = "Hot Water"
  }

}