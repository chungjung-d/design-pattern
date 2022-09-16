import { ICup } from "../interface/coffee.resource.interface";

export class PaperCup implements ICup{
  explanation: string;
  constructor() {
    this.explanation = "Paper Cup"
  }
}