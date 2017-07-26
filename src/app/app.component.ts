import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from './messaging/message';
import { MessageType } from './messaging/message-type.enum';
import { SlackMessage } from './messaging/slack-message';
import { TextMessage } from './messaging/text-message';
import { TwitterMessage } from './messaging/twitter-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'TypeScript Message Sender';
  messages: Message[];
  type: MessageType;
  types = MessageType;

  ngOnInit() {
    //debugger;
    this.type = MessageType.text;
    this.messages = [];
  }

  switchType(type: MessageType): void {
    this.type = type;
  }

  submitText(text: string, phoneNumber: number) {
    const m = new TextMessage(text, phoneNumber);
    this.messages.push(m);
  }

  submitSlack(text: string, channel: string) {
    const m = new SlackMessage(text, channel);
    this.messages.push(m);
  }

  submitTwitter(text: string, mention: string) {
    const m = new TwitterMessage(text, mention);
    this.messages.push(m);
  }

  typeToString(messageType: MessageType): string {
    switch (messageType) {
      case MessageType.slack:
        return 'Slack';
      case MessageType.text:
        return 'Text Message';
      case MessageType.twitter:
        return 'Twitter';
    }
  }
}
