export interface IObserver {

  // Receive notifications from Observable
  notify(notifyData: unknown): void
}