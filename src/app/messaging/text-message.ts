import { Message } from './message';
import { MessageType } from './message-type.enum';

export class TextMessage extends Message {
    constructor(public text: string, public phoneNumber: number) {
        super(text);
        this.type = MessageType.text;
    }

}
