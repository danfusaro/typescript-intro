import { MessageType } from './message-type.enum';

export class Message {

    type: MessageType;

    readonly uid: number;
    private date: Date;
    public sent: boolean;

    constructor(public text: string) {
        // Generated when class is instantiated
        this.uid = Math.round(Math.random() * 10000000000);
        this.date = new Date();
    }

    send(): void {
        console.log(this.date, this.text, this.type);
        this.sent = true;
    }

}
