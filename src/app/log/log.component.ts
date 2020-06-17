import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  messages: string[];

  constructor( private messagesService: MessagesService ) { }

  ngOnInit(): void {
    this.messages = this.messagesService.messages;
  }

}
