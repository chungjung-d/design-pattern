import { IObserver } from "../../interface/observer.interface";
import { ObservablePullAbstract } from "./observable.pull.abstract";

export abstract class ObserverPullAbstract implements IObserver {

  abstract notify(observable : ObservablePullAbstract<any>): void

}

