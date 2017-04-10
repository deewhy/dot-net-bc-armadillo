import { Injectable } from '@angular/core';

import { Event } from '../models/event';
import { AuthenticationService } from './authentication.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Subject } from '../abstracts/subject';
import { Attendence } from '../models/attendence';

@Injectable()
export class EventAttendenceService extends Subject {

    private URL = "http://dotnetbcbackend.azurewebsites.net/api/APIAttendEvents";

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        super();
    }

    getIsAttending(eventId: number): Promise<Attendence> {
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('UserName', this.authenticationService.getUsername());
        headers.append('Password', this.authenticationService.getPassword());
        headers.append('Evid', "" + eventId);
        let options = new RequestOptions({ headers: headers });
        
        let att: Promise<Attendence> =  this.http.get(this.URL, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
               return att;
    }

    setIsAttending(eventId: number, isAttending: boolean, exists: boolean) {
        if (exists) {
            this.attendenceExists(eventId, isAttending, exists);
        } else {
            this.attendenceDoesNotExist(eventId, isAttending, exists);
        }
    }

    private attendenceExists(eventId: number, isAttending: boolean, exists: boolean) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let body = {
            'UserName': this.authenticationService.getUsername(),
            'Password': this.authenticationService.getPassword(),
            'Evid': eventId,
            'Attending': isAttending
        };

        let options = new RequestOptions({ headers: headers, body: body });
        let response: Promise<any>;
        response = this.http.put(this.URL, body, options)
            .toPromise()
            .then(q => {this.notifyListeners();})
            .catch(this.handleError);
    }

    private attendenceDoesNotExist(eventId: number, isAttending: boolean, exists: boolean) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let body = {
            'UserName': this.authenticationService.getUsername(),
            'Password': this.authenticationService.getPassword(),
            'Evid': eventId,
            'Attending': isAttending
        };

        let options = new RequestOptions({ headers: headers, body: body });
        let response: Promise<any>;
        response = this.http.post(this.URL, body, options)
            .toPromise()
            .then(q => {this.notifyListeners();})
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<Response> {
        return new Promise<Response>((resolve, reject) => {
            resolve(error._body);
        });
    }
}