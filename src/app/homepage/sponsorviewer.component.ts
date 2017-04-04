import { Component, OnInit } from '@angular/core';

import { Sponsor } from '../models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'sponsor-viewer',
  templateUrl: './sponsorviewer.component.html',
  styleUrls: ['./sponsorviewer.component.css']
})
export class SponsorViewerComponent implements OnInit {

    public sponsors: Sponsor[];

    ngOnInit(): void {
        this.sponsorService.getSponsors().then(s => this.sponsors = s);
    }

    constructor(private sponsorService: SponsorService) { }
}
