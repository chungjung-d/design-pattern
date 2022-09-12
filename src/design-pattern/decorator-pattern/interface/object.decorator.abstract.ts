import { IObject } from "./object.interface";

export class AbstractObjectDecorator<T extends IObject> {
  protected object : T

  constructor(object : T) {
    this.object = object
  }
}