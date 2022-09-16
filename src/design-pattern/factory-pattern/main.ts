import { GeishaCoffeeStore } from "./geisha-coffee-implement/geisha-coffee.store";
import { JejuCoffeeStore } from "./jeju-coffee-implement/jeju-coffee.store";

const geishaCoffeeStore : GeishaCoffeeStore =  new GeishaCoffeeStore()
const jejuCoffeeStore : JejuCoffeeStore = new JejuCoffeeStore()

const geishaCoffee1 = geishaCoffeeStore.createCoffee()
const geishaCoffee2 = geishaCoffeeStore.createCoffee()
const jejuCoffee1 = jejuCoffeeStore.createCoffee()


console.log(geishaCoffee1)
console.log(geishaCoffee2)
console.log(jejuCoffee1)