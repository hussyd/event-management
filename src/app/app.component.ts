import { Component } from '@angular/core';
import example from '../models/example.json';
import { Event } from 'src/models/event';
import { CalendarEvent } from 'angular-calendar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'event-management-app';
  events = this.convertToCalendarEvent(example as Array<Event>);
  selectedEvent = null;
  viewDate = new Date();

  constructor()
  { }

  public toString(event: CalendarEvent): string{
    return `${event.title} - ${formatDate(event.start, 'yyyy-MM-dd HH:mm', 'hu')}/${event.allDay ? 'All day' : formatDate(event.end, 'yyyy-MM-dd', 'hu')}`;
  }

  public setActiveEvent(event: CalendarEvent): void{
    this.selectedEvent = event;
    this.viewDate = event.start;
  }

  public isSelected(event: CalendarEvent): boolean{
    return this.selectedEvent === event;
  }

  private convertToCalendarEvent(data: Array<Event>): Array<CalendarEvent>{
    const results = new Array<CalendarEvent>();

    data.forEach(x => {
      const event = {} as CalendarEvent;
      event.title = x.title;
      event.start = new Date(x.startDate);
      event.allDay = x.isAllDay;
      
      if(!event.allDay){
        event.end = new Date(x.endDate);
      }

      event.meta = x.description;
      
      results.push(event);
    });

    return results;
  }
}
