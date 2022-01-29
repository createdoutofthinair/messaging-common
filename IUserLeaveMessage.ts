import { ISubscriptionMessage } from "./ISubscriptionMessage.ts";

interface IUserLeaveMessage extends ISubscriptionMessage {
  userId: string;
}
