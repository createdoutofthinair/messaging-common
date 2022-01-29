import { ISubscriptionMessage } from "./ISubscriptionMessage.ts";

interface IUserEnterMessage extends ISubscriptionMessage {
  userId: string;
}
