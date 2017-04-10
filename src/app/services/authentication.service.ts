import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Subject } from '../abstracts/subject';

@Injectable()
export class AuthenticationService extends Subject implements CanActivate {
    private TOKEN_NAME: string = "netbc-token";
    private URL = 'http://dotnetbcbackend.azurewebsites.net/connect/token';
    private USERNAME_NAME: string = "netbc-username"
    private PASSWORD_NAME: string = "netbc-password"
    
    constructor(private http: Http, private router: Router) {
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
                this.setToken(user["access_token"], username, password);
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

    setToken(token: string,username: string, password: string): void {
        localStorage.setItem(this.TOKEN_NAME, token);
        localStorage.setItem(this.USERNAME_NAME, username);
        localStorage.setItem(this.PASSWORD_NAME, password);
    }

    getUsername(): string {
        let username: string = localStorage.getItem(this.USERNAME_NAME);
        if (username == undefined) {
            return "";
        }

        return username;
    }

    getPassword(): string {
        let password: string = localStorage.getItem(this.PASSWORD_NAME);
        if (password == undefined) {
            return "";
        }

        return password;
    }

    isLoggedIn(): boolean {
        return this.getToken().length > 0;
    }

    logOut(): void {
        localStorage.setItem(this.TOKEN_NAME, "");
        this.notifyListeners();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }
    }
}