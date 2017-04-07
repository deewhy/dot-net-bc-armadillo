import { Component } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  username: string;
  password: string;

  onSubmit() {
    this.login(this.username, this.password);
  }

  login(username: string, password: string): void {
    this.authenticationService.authenticate(username, password);
  }

}
