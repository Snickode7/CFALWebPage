import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ServicesComponent } from './components/services/services.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EventsNewsComponent } from './components/events-news/events-news.component';


const appRoutes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CalendarComponent,
    ServicesComponent,
    NavigationComponent,
    CarouselComponent,
    EventsNewsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule

  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
})
export class AppModule { }
