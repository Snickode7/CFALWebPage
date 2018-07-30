import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-news',
  templateUrl: './events-news.component.html',
  styleUrls: ['./events-news.component.css']
})
export class EventsNewsComponent {

  public events = [new Event('Hello', '03/28/2018'), new Event('Goodbye', '06/5/2018'), new Event('Monday', '07/16/2018')];
  constructor(public router: Router) {}
}
export class Event {
  constructor(public name: string, public eventDate: string) {}
}
