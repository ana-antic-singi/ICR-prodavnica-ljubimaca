import { Component, Input } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-rasabot',
  standalone: false,
  templateUrl: './rasabot.component.html',
  styleUrls: ['./rasabot.component.css']
})
export class RasabotComponent {

  userMessage: string = '';
  messages = [
    { type: 'bot', text: 'How can I help you?' }
  ];

  isChatVisible = false

  constructor(private webService: WebService) {}

  toggleChat() {
    this.isChatVisible = !this.isChatVisible
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ type: 'user', text: this.userMessage });
      const obs = this.webService.sendRasaMessage(this.userMessage);
      this.userMessage = '';
      obs.subscribe(rsp => {
        if (rsp.length === 0) {
          this.messages.push({
            type: 'bot',
            text: 'Sorry, I did not understand your question.'
          });
          return;
        }
        rsp.map(msg => msg.image ? `<img src="${msg.image}">` : msg.text).forEach(msg => {
          this.messages.push({
            type: 'bot',
            text: msg!
          });
        });
      });
    }
  }
}
