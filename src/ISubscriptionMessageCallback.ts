export interface ISubscriptionMessageCallback<T> {
  (message: T): void;
}
