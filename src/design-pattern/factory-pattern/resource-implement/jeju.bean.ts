import { IBean, IWater } from "../interface/coffee.resource.interface";

export class JejuBean implements IBean{
  explanation: string;
  constructor() {
    this.explanation = "Jeju Bean"
  }
}