import { Injectable } from '@angular/core';

import { Sponsor } from '../models/sponsor';
import { SponsorDummyData } from './sponsor_dummy_data';

@Injectable()
export class SponsorService {
    getSponsors(): Promise<Sponsor[]> {
        let sp = new SponsorDummyData();
        let promise = new Promise((resolve, reject) => resolve(sp.getSponsors()));
        return promise;
    }
}