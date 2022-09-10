import { IObservable } from "../../interface/observable.interface";
import { ObserverPullAbstract } from "./observer.pull.abstract";

export abstract class ObservablePullAbstract<ObjectData> implements IObservable {

  protected observers: Set<ObserverPullAbstract>

  protected constructor() {
    this.observers = new Set()
  }

  abstract getObjectData():ObjectData

  subscribe(observer: ObserverPullAbstract): void{
    this.observers.add(observer)
  }

  unsubscribe(observer: ObserverPullAbstract): void{
    this.observers.delete(observer)
  }

  notify(): void{
    this.observers.forEach((observer: ObserverPullAbstract)=>{
      observer.notify(this)
    })
  }
}