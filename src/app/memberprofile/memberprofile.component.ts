import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { MemberService } from '../services/member.service';
import { Member } from '../models/member';
import { Observer } from '../interfaces/observer';

@Component({
  selector: 'member-profile',
  templateUrl: './memberprofile.component.html',
  styleUrls: ['./memberprofile.component.css']
})
export class MemberProfileComponent implements OnInit, Observer {

  public member: Member;

  constructor(private authenticationService: AuthenticationService, private memberService: MemberService) {
    this.memberService.registerListener(this);
  }

  notify(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.memberService.getLoggedInMember().then(m => this.member = m);
  }

  submit(): void {
    this.memberService.updateMember(this.member);
  }
}
