import { ValueObject } from "./implement/value-object";
import { ValueObjectAddDecorator } from "./implement/value-object.add.decorator";
import { ValueObjectSubDecorator } from "./implement/value-object.sub.decorator";

const value = new ValueObject(10)
const addValueDecorator1 = new ValueObjectAddDecorator(value,50)
const addValueDecorator2 = new ValueObjectAddDecorator(addValueDecorator1,50)
const sumValueDecorator3 = new ValueObjectSubDecorator(addValueDecorator2,30)

console.log(sumValueDecorator3.value)