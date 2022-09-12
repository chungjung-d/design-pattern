import { IValueObject } from "../interface/value-object.interface";

export class ValueObject implements IValueObject{
  private _value: number;

  constructor(value : number) {
    this._value = value;
  }

  get value(): number { return this._value; }

}