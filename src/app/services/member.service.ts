import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Member } from '../models/member';

@Injectable()
export class MemberService {

    private URL = "http://dotnetbcbackend.azurewebsites.net/api/APIEvents";

    constructor(private http: Http, private authenticationService: AuthenticationService) {}

    getLoggedInMember(): Promise<Member> {
        //if (!this.authenticationService.isLoggedIn()) {
            let m:Member = new Member();
            m.city = "FakeTowne";
            m.created = new Date();
            m.email = "fake@fake.fake";
            m.firstname = "firstfakename";
            m.lastname = "lastfakename";
            m.isactive = true;
            m.notifiyjobs = true;
            m.password = "fake";
            m.username = "fake";

            return new Promise<Member>((resolve, reject) => {m; resolve(m);});
        //}
        /*
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
        headers.append('content-type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        
        let member: Promise<Member> =  this.http.get(this.URL, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
               return member;
               */
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}