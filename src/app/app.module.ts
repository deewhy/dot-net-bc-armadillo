import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navigation/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './homepage/home.component';
import { EventViewerComponent } from './homepage/eventviewer.component';
import { SponsorViewerComponent } from './homepage/sponsorviewer.component';
import { RegistrationComponent } from './registration/registration.component';
import { MemberProfileComponent } from './memberprofile/memberprofile.component';
import { LoginComponent } from './login/login.component';

import { EventService } from './services/event.service';
import { SponsorService } from './services/sponsor.service';
import { AuthenticationService } from './services/authentication.service';
import { MemberService } from './services/member.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    EventViewerComponent,
    SponsorViewerComponent,
    FooterComponent,
    RegistrationComponent,
    MemberProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'registration', component: RegistrationComponent
    },
    {
      path: 'profile', component: MemberProfileComponent
    }
    ])
  ],
  providers: [
    EventService,
    SponsorService,
    AuthenticationService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
