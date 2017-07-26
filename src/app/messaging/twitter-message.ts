import { Authenticate } from './authenticate';
import { Message } from './message';
import { MessageType } from './message-type.enum';

export class TwitterMessage extends Message implements Authenticate {

    constructor(public text: string, public mention: string) {
        super(text);
        this.type = MessageType.twitter;
    }

    send(): void {
        if (this.isAuthenticated()) {
            super.send();
        } else {
            console.log('Not authenticated, todo');
        }
    }

    isAuthenticated(): boolean {
        return true;
    }

    authenticate(username: string, password: string): boolean {
        // do auth
        return true;
    }
}
