import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'event-viewer',
  templateUrl: './eventviewer.component.html'
})
export class EventViewerComponent implements OnInit {

    public events: Event[];

    ngOnInit(): void {
        this.eventService.getMemberEvents().then(e => this.events = e);
    }

    constructor(private eventService: EventService) { }
}
