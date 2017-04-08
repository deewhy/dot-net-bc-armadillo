import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { MemberService } from '../services/member.service';
import { Member } from '../models/member';

@Component({
  selector: 'member-profile',
  templateUrl: './memberprofile.component.html',
  styleUrls: ['./memberprofile.component.css']
})
export class MemberProfileComponent implements OnInit {

  public member: Member;

  constructor(private authenticationService: AuthenticationService, private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.getLoggedInMember().then(m => this.member = m);
  }
}
