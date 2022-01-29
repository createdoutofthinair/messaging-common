export interface ISubscriptionMessageCallback<T> {
  message<T>(message: T): void;
}
