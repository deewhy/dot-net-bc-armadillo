import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Listener } from '../interfaces/listener';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'event-viewer',
  templateUrl: './eventviewer.component.html',
  styleUrls: ['./eventviewer.component.css'],
})
export class EventViewerComponent implements OnInit, Listener  {

    public events: Event[];

    constructor(private eventService: EventService, private authenticationService: AuthenticationService) {
        this.authenticationService.registerListener(this);
    }

    notify(): void {
        this.ngOnInit();
    }

    ngOnInit(): void {
        this.eventService.getEvents().then(e => this.events = e);
    }
}
