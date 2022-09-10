import { IObserver } from "./observer.interface";

export interface IObservable {

  //set the subscriber
  subscribe(observer: IObserver) : void

  //dismiss the subscriber
  unsubscribe(observer : IObserver) : void

  // Notify function to Observer
  notify( notifyData : unknown ) : void
}

