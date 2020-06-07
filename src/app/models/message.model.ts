export class Message {
  id: string;
  userName: string;
  userId: string;
  messageText: string;
  constructor(obj: MessageData = {} as Message) {
    const { id = "", userName = "", userId = "", messageText = "" } = obj;
    this.id = id;
    this.userId = userId;
    this.userName = userName;
    this.messageText = messageText;
  }
}
export interface MessageData {
  id: string;
  userName: string;
  userId: string;
  messageText: string;
}
