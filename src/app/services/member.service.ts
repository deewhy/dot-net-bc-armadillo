import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Member } from '../models/member';
import { Subject } from '../abstracts/subject';
@Injectable()
export class MemberService extends Subject {

    private URL = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers";
    private URL_GET = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers/username/";
    private URL_UPDATE = "http://dotnetbcbackend.azurewebsites.net/api/APIApplicationUsers";

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
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
        headers.append('content-type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        
        let member: Promise<Member> =  this.http.get(this.URL_GET + this.authenticationService.getUsername(), options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
        return member;
    }

    updateMember(UserName: string, Email: string, FirstName: string, LastName: string, City: string): void {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'UserName': UserName,
            'Email': Email,
            'FirstName': FirstName,
            'LastName': LastName,
            'City': City
        });
        let options = new RequestOptions({ headers: headers });
        let response: Promise<any>;
        response = this.http.put(this.URL_UPDATE, options)
            .toPromise()
            .then(q => this.notifyListeners())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<Response> {
        return new Promise<Response>((resolve, reject) => {
            resolve(error._body);
        });
    }
}