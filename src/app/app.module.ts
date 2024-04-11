import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    RegistrationComponent,
    JobsComponent,
    MyJobsComponent,
    JobListingComponent,
    JobDetailsComponent,
    HomeComponent,
    CreateNewJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
