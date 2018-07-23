import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  public events = [new Event('Hello', '03/28/2018'), new Event('Goodbye', '06/5/2018'), new Event('Monday', '07/16/2018')];
  constructor(public router: Router) {}
}
export class Event {
  constructor(public name: string, public eventDate: string) {}
}


export function ArrowChange() {
  document.getElementById('accordionButton').onclick = function() {
    alert('click');
};
}



