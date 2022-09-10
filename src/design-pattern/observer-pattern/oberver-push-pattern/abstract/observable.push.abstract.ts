import { IObservable } from "../../interface/observable.interface";
import { IObserver } from "../../interface/observer.interface";

export abstract class ObservablePushAbstract<ObjectData, NotificationData> implements IObservable {

  protected observers: Set<IObserver>

  protected constructor() {
    this.observers = new Set()
  }

  abstract getObjectData():ObjectData
  abstract getNotificationData(): NotificationData

  subscribe(observer: IObserver): void{
    this.observers.add(observer)
  }

  unsubscribe(observer: IObserver): void{
    this.observers.delete(observer)
  }

  notify(notifyData: NotificationData): void{
    this.observers.forEach((observer:IObserver)=>{
      observer.notify(notifyData)
    })
  }
}