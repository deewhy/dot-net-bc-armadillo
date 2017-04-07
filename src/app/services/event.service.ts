import { Injectable } from '@angular/core';

import { Event } from '../models/event';
import { AuthenticationService } from './authentication.service';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class EventService {

    private URL = "http://dotnetbcbackend.azurewebsites.net/api/APIEvents";
    private URL_PUBLIC = "http://dotnetbcbackend.azurewebsites.net/api/APIPublicEvents";

    constructor(private http: Http, private authenticationService: AuthenticationService) {}

    getEvents(): Promise<Event[]> {
        return this.authenticationService.isLoggedIn() ? this.getMemberEvents() : this.getAnonymousEvents();
    }

    getMemberEvents(): Promise<Event[]> {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
        headers.append('content-type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        
        let events: Promise<Event[]> =  this.http.get(this.URL, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
               return events;
    }

    getAnonymousEvents(): Promise<Event[]> {
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        
        let events: Promise<Event[]> =  this.http.get(this.URL_PUBLIC, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
               return events;
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}