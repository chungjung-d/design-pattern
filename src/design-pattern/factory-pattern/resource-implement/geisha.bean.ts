import { IBean } from "../interface/coffee.resource.interface";

export class GeishaBean implements IBean{
  explanation: string;
  constructor() {
    this.explanation = "Geisha Bean"
  }
}