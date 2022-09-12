import { IValueObject } from "./value-object.interface";
import { AbstractObjectDecorator } from "./object.decorator.abstract";

export class AbstractValueObjectDecorator extends AbstractObjectDecorator<IValueObject>  implements IValueObject{

  constructor(object : IValueObject) {
    super(object);
  }

  protected _value: number;

  get value(): number { return this._value; }
}