import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Sponsor } from '../models/sponsor';

@Injectable()
export class SponsorService {

    private URL = "http://dotnetbcbackend.azurewebsites.net/api/APISponsors";

    constructor(private http: Http) {}
    getSponsors(): Promise<Sponsor[]> {
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        
        let sponsors: Promise<Sponsor[]> =  this.http.get(this.URL, options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
               return sponsors;
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}