import { ISubscriptionMessage } from "./ISubscriptionMessage.ts";

export interface IUserEnterMessage extends ISubscriptionMessage {
  userId: string;
}
