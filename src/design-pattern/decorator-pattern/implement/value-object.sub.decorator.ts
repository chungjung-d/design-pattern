import { AbstractValueObjectDecorator } from "../interface/value-object.decorator.abstract";
import { ValueObject } from "./value-object";
import { IValueObject } from "../interface/value-object.interface";

export class ValueObjectSubDecorator extends AbstractValueObjectDecorator{

  private add_value : number

  constructor(object : IValueObject, add_value : number) {
    super(object);
    this.add_value = add_value;
  }

  get value(){
    return this.object.value - this.add_value;
  }

}