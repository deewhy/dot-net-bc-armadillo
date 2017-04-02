import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navigation/navbar.component';
import { EventService } from './services/event.service';
import { SponsorService } from './services/sponsor.service';
import { HomeComponent } from './homepage/home.component';
import { EventViewerComponent } from './homepage/eventviewer.component';
import { SponsorViewerComponent } from './homepage/sponsorviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    EventViewerComponent,
    SponsorViewerComponent
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
    }
    ])
  ],
  providers: [EventService,
              SponsorService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
