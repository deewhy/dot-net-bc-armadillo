import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Subject } from '../abstracts/subject';

@Injectable()
export class AuthenticationService extends Subject implements CanActivate {
    private TOKEN_NAME: string = "zenithToken";
    private URL = 'http://dotnetbcbackend.azurewebsites.net/connect/token';
    
    constructor(private http: Http) {
        super();
     }

    authenticate(username: string, password: string): void {
        let creds = 'username=' + username + '&password=' + password + '&grant_type=password'
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.URL, creds, options)
            .toPromise()
            .then(r => {
                let user = r.json();
                this.setToken(user["access_token"]);
                this.notifyListeners();
            });
    }

    getToken(): string {
        let token: string = localStorage.getItem(this.TOKEN_NAME);

        if (token == undefined) {
            return "";
        }

        return token;
    }

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_NAME, token);
    }

    isLoggedIn(): boolean {
        return this.getToken().length > 0;
    }

    logOut(): void {
        localStorage.setItem(this.TOKEN_NAME, "");
        this.notifyListeners();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.isLoggedIn();
    }
}