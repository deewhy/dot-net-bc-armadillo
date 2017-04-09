import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { MemberService } from '../services/member.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Member } from '../models/member';
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  UserName: string;
  Password: string;
  ConfirmPassword: string;
  Email: string;
  FirstName: string;
  LastName: string;
  City: string;
  NotifyJobs: boolean
  problem: boolean;

  error: any;
  getMember: any;

  constructor(private http: Http, private authenticationService: AuthenticationService, private memberService: MemberService, private router: Router) {}

  onSubmit(): void {
    this.memberService.registerMember(this.UserName, this.Password, this.ConfirmPassword, this.Email, this.FirstName, this.LastName, this.City, this.NotifyJobs).then(q => {this.getMember = q; this.ngOnInit()});
    this.error = undefined;
    this.problem = false;
  }

  ngOnInit(): void {
    this.error = this.getMember;
    if (this.error != undefined) {
      try {
        this.error = JSON.parse(this.error);
        this.problem = true;
      } catch (e) {
        //Registered
        this.authenticationService.authenticate(this.UserName, this.Password);
        this.router.navigate(['/home']);
      }
    }
  }

  getError(error: string) {
    try {
      return this.error[error][0];
    } catch (e) {
      return null
    }
  }
}
