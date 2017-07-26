import { Authenticate } from './authenticate';
import { Message } from './message';
import { MessageType } from './message-type.enum';

export class SlackMessage extends Message implements Authenticate {
    constructor(public text: string, public channel: string) {
        super(text);
        this.type = MessageType.slack;
    }

    send(): void {
        if (this.isAuthenticated()) {
            super.send();
        } else {
            console.log('Not authenticated, todo');
        }
    }

    isAuthenticated(): boolean {
        return false;
    }

    authenticate(username: string, password: string): boolean {
        // Do authentication
        return false;
    }
}
