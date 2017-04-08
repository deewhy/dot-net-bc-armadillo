import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observer } from '../interfaces/observer';

@Component({
  selector: 'event-detail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css'],
})
export class EventDetailComponent implements Observer, OnInit {
    id: number;
    isPublicEvent: boolean;
    selectedEvent: Event;
    private publicEvents: Event[];

    constructor(private eventService: EventService, private authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute) {
        this.authenticationService.registerListener(this);
    }

    notify(): void {
        this.ngOnInit();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => { this.id = +params['id']; });

        this.eventService.getAnonymousEvents().then(e => {
            e.forEach(q => {
                if (q.evid == this.id) {
                    this.isPublicEvent = true;
                    this.selectedEvent = q;
                    return;
                }
            })

            if (!this.isPublicEvent) {
                if (this.authenticationService.isLoggedIn()) {
                    this.eventService.getEvents().then(e => e.forEach(q => {
                    if (q.evid == this.id) {
                        this.selectedEvent = q
                    }
                    }));
                }
            }

        });
    }
}