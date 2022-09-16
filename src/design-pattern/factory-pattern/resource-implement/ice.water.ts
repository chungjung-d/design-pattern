import { IWater } from "../interface/coffee.resource.interface";

export class IceWater implements IWater{
  explanation: string;
  constructor() {
    this.explanation = "Ice Water"
  }

}