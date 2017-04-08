import { Injectable } from '@angular/core';


import { JobPosting } from '../models/jobposting';

@Injectable()
export class JobPostingService {

    getJobPostings(): Promise<JobPosting[]> {
        return new Promise<JobPosting[]>((resolve, reject) => {
            this.samplePostings();
            resolve(this.samplePostings());
        });
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    private samplePostings(): JobPosting[]  {
        let jobs: JobPosting[] = Array<JobPosting>();
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        jobs.push(this.makeJob("ASP .NET Frontend Developer"));
        jobs.push(this.makeJob("ASP .NET Backend Developer"));
        jobs.push(this.makeJob("ASP .NET Full-Stack Developer"));
        jobs.push(this.makeJob("Angular 4 dev.  5 years of experience required."));
        jobs.push(this.makeJob("Arnold C dev"));
        jobs.push(this.makeJob("Wordpress developer for cat picture website"));
        jobs.push(this.makeJob("Internship position at new start-up company"));
        
        return jobs;
    }

    private makeJob(name: string): JobPosting {
        let job = new JobPosting();
        job.jobUrl = "http://www.google.com";
        job.jobTitle = name;
        return job;
    }
}