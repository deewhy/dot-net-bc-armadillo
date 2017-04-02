import { Injectable } from '@angular/core';

import { Event } from '../models/event';
import { EventDummyData } from './event_dummy_data';

@Injectable()
export class EventService {
    getMemberEvents(): Promise<Event[]> {
        let ev = new EventDummyData();
        let promise = new Promise((resolve, reject) => resolve(ev.getEvents()));
        return promise;
    }

    getAnonymousEvents(): Promise<Event[]> {
        let ev = new EventDummyData();
        let promise = new Promise((resolve, reject) => resolve(ev.getEvents()));
        return promise;
    }
}