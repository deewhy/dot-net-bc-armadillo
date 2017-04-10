import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Member } from '../models/member';
import { Subject } from '../abstracts/subject';
@Injectable()
export class MemberService extends Subject {

    private URL = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers";
    private URL_GET = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers/myprofile";

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        super();
    }

    registerMember(UserName: string, Password: string, ConfirmPassword: string, Email: string, FirstName: string, LastName: string, City: string, NotifyJobs: boolean): Promise<Member> {
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
        let headers = new Headers({
            'UserName': this.authenticationService.getUsername(),
            'Password': this.authenticationService.getPassword()
        });

        let options = new RequestOptions({ headers: headers });
        
        let member: Promise<Member> =  this.http.get(this.URL_GET, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
        return member;
    }

    updateMember(member: any): void {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let body = {
            'UserName': this.authenticationService.getUsername(),
            'Password': this.authenticationService.getPassword(),
            'Email': member.email,
            'FirstName': member.firstName,
            'LastName': member.lastName,
            'City': member.city,
            'NotifyJobs': member.notifyJobs
        };
        let options = new RequestOptions({ headers: headers, body: body });
        let response: Promise<any>;
        response = this.http.put(this.URL_GET, body, options)
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