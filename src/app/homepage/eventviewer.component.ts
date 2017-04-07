import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'event-viewer',
  templateUrl: './eventviewer.component.html',
  styleUrls: ['./eventviewer.component.css']
})
export class EventViewerComponent implements OnInit {

    public events: Event[];

    public selectedEvent: Event;

    ngOnInit(): void {
        this.eventService.getEvents().then(e => this.events = e);
    }

    viewEvent(event: Event): void {
        this.selectedEvent = event;
        
    }


    constructor(private eventService: EventService) { }
}
