import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { AuthenticationService } from '../services/authentication.service';
import { MemberService } from '../services/member.service';
import { EventAttendenceService } from '../services/eventattendence.service';
import { Observer } from '../interfaces/observer';
import { Attendence } from '../models/attendence';

@Component({
  selector: 'event-detail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css'],
})
export class EventDetailComponent implements Observer, OnInit {
    id: number;
    isPublicEvent: boolean;
    selectedEvent: Event;
    attendence: Attendence;
    isAttending: boolean = false;
    private publicEvents: Event[];

    constructor(private eventService: EventService, private authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute, private eventAttendenceService: EventAttendenceService) {
        this.authenticationService.registerListener(this);
        this.eventAttendenceService.registerListener(this);
    }

    submit() {
        this.attendence.attending = !this.attendence.attending;
        this.eventAttendenceService.setIsAttending(this.selectedEvent.evid, this.attendence.attending, this.attendence.exists);
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
                    this.eventAttendenceService.getIsAttending(this.selectedEvent.evid).then(a => this.attendence = a);
                    return;
                }
            })

            if (!this.isPublicEvent) {
                if (this.authenticationService.isLoggedIn()) {
                    this.eventService.getEvents().then(e => e.forEach(q => {
                        if (q.evid == this.id) {
                            this.selectedEvent = q;
                            this.eventAttendenceService.getIsAttending(this.selectedEvent.evid).then(a => this.attendence = a);
                        }
                    }));
                }
            }
            
        });
    }
}