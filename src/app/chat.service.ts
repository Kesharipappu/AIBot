import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap: any = {
    "hi": "hello",
    "Hi": "Hello",
    "how are you":"I am fine what about you ?",
    "How are you":"I am fine what about you ?",
    "who are you": "My name is TestCodeiz AI Bot",
    "Who are you": "My name is TestCodeiz AI Bot",
    "what is angular": "Angular is the best framework ever",
    "What is Angular": "Angular is the best framework ever",
    "god":"God Answers All Prayers That Are in Line with His Purpose for Our Lives",
    "God":"God Answers All Prayers That Are in Line with His Purpose for Our Lives",
    "dog":"The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dog's nearest living relative. Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture.",
    "Dog":"The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dog's nearest living relative. Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture.",
    "what is AI":"Artificial intelligence (AI) is the hottest buzzword at the moment, and almost every major company is adding some kind of AI features to its product or service.",
    "What is AI":"Artificial intelligence (AI) is the hottest buzzword at the moment, and almost every major company is adding some kind of AI features to its product or service.",
    "default": "I can't understand. Can you please repeat other wise contact with : => Pappu Kumar Keshari"
  }

  getBoatAnswer(msg: any) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBoatMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage])
    }, 100);
  }

  getBoatMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default']
  }




}
