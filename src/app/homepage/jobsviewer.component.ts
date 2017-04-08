import { Component, OnInit } from '@angular/core';

import { JobPosting } from '../models/jobposting';
import { JobPostingService } from '../services/jobposting.service';

@Component({
  selector: 'jobs-viewer',
  templateUrl: './jobsviewer.component.html',
  styleUrls: ['./jobsviewer.component.css'],
})
export class JobsViewerComponent implements OnInit {

    constructor(private jobPostingService: JobPostingService) {}

    public jobs: JobPosting[];

    ngOnInit(): void {
        this.jobPostingService.getJobPostings().then(j => this.jobs = j);
    }
}
