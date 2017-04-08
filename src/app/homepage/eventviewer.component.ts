import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Observer } from '../interfaces/observer';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'event-viewer',
  templateUrl: './eventviewer.component.html',
  styleUrls: ['./eventviewer.component.css'],
})
export class EventViewerComponent implements OnInit, Observer  {

    public events: Event[];

    // requested week
    public firstDayWeek: Date;
    public lastDayWeek: Date;

    public anchorDay: Date;

    public selectedEvent: Event;
    constructor(private eventService: EventService, private authenticationService: AuthenticationService) {
        this.authenticationService.registerListener(this);
    }

    notify(): void {
        this.ngOnInit();
    }

    ngOnInit(): void {
        if (this.authenticationService.isLoggedIn()) {
            this.eventService.getEvents().then(e => this.setThisWeeksEvents(e));
        } else {
            this.eventService.getEvents().then(e => this.events = e);
        }
        
    }
    
    setThisWeeksEvents(events: Event[]) {
        if (this.anchorDay == null) {
            this.setAnchorDay();
        }
        this.events = this.getTenEventsAfterAnchorDay(events);
    }

    getTenEventsAfterAnchorDay(allEvents: Event[]): Event[] {
        var thisWeeksEvents: Event[] = [];
        for (var i = 0; i < allEvents.length; i++) {
            var eventDate: Date = new Date(allEvents[i].evdate);
            if (eventDate >= this.anchorDay) {
                for (var j = 0; j < 10 && i < allEvents.length; j++, i++) {
                    thisWeeksEvents.push(allEvents[i]);
                }
                return thisWeeksEvents;
            }
        }

        return null;
    }

    moveToPreviousAnchor(): void {
        this.eventService.getEvents().then(e => this.setNewAnchorDayPrevious(e));
        this.eventService.getEvents().then(e => this.setThisWeeksEvents(e));
    }
    
    moteToNextAnchor(): void {
        this.eventService.getEvents().then(e => this.setNewAnchorDayNext(e));
        this.eventService.getEvents().then(e => this.setThisWeeksEvents(e));
    }
    
    setNewAnchorDayPrevious(allEvents: Event[]): void {
        var thisWeeksEvents: Event[] = [];
        for (var i = 0; i < allEvents.length; i++) {
            var eventDate: Date = new Date(allEvents[i].evdate);
            eventDate.setHours(0,0,0,0);
            if (eventDate >= this.anchorDay) {
                if (!(i - 10 < 0)){
                    this.anchorDay = new Date(allEvents[i-10].evdate);
                }
                return;
            }
        }
        
    }
    
    setNewAnchorDayNext(allEvents: Event[]): void {
        var thisWeeksEvents: Event[] = [];
        for (var i = 0; i < allEvents.length; i++) {
            var eventDate: Date = new Date(allEvents[i].evdate);
            eventDate.setHours(0,0,0,0);
            if (eventDate >= this.anchorDay) {
                if (!(i + 10 > (allEvents.length - 1))){
                    this.anchorDay = new Date(allEvents[i+10].evdate);
                }
                return;
            }
        }
        
    }
    
    moveToNextWeek(): void  {
        var oneWeekAgoBegin = new Date();
        oneWeekAgoBegin = new Date(this.anchorDay.getTime() + (60*60*24*7*1000));
        this.anchorDay = oneWeekAgoBegin;
        
        alert(this.anchorDay);
        this.eventService.getEvents().then(e => this.setThisWeeksEvents(e));
    }

    
    
    setAnchorDay(): void {
        var curr = new Date; // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

        this.anchorDay = new Date(curr.setDate(first));
        this.anchorDay.setHours(0,0,0,0);
    }




}
