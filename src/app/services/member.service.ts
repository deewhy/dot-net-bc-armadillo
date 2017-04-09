import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Member } from '../models/member';

@Injectable()
export class MemberService {

    private URL = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers";

    constructor(private http: Http, private authenticationService: AuthenticationService) {}

    registerMember(UserName: string, Password: string, ConfirmPassword: string, Email: string, FirstName: string, LastName: string, City: string, NotifyJobs: boolean): Promise<Member> {
        //let creds = 'UserName=' + UserName + '&password=' + Password + '&grant_type=password' + '&ConfirmPassword=' + ConfirmPassword + '&Email=' + Email + '&FirstName='
        let headers = new Headers({
            'Content-Type': 'application/json',
            'UserName': UserName,
            'Password': Password,
            'ConfirmPassword': ConfirmPassword,
            'Email': Email,
            'FirstName': FirstName,
            'LastName': LastName,
            'City': City,
            'NotifyJobs': NotifyJobs
        });
        let json = {
            'Content-Type': 'application/json',
            'UserName': UserName,
            'Password': Password,
            'ConfirmPassword': ConfirmPassword,
            'Email': Email,
            'FirstName': FirstName,
            'LastName': LastName,
            'City': City,
            'NotifyJobs': NotifyJobs
        };
        let options = new RequestOptions({ headers: headers });
        let response: Promise<any>;
        response = this.http.post(this.URL, json)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);

        return response;
    }

    getLoggedInMember(): Promise<Member> {
        //if (!this.authenticationService.isLoggedIn()) {
            let m:Member = new Member();
            m.City = "FakeTowne";
            m.Created = new Date();
            m.Email = "fake@fake.fake";
            m.FirstName = "firstfakename";
            m.LastName = "lastfakename";
            m.isActive = true;
            m.NotifiyJobs = true;
            m.Password = "fake";
            m.UserName = "fake";

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

    private handleError(error: any): Promise<Response> {
        return new Promise<Response>((resolve, reject) => {
            resolve(error._body);
        });
        //return Promise.reject(error.message || error);
    }
}