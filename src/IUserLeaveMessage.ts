import { ISubscriptionMessage } from "./ISubscriptionMessage.ts";

export interface IUserLeaveMessage extends ISubscriptionMessage {
  userId: string;
}
