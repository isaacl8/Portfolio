import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollComponent } from './poll/poll.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { MainService } from './main.service';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PollComponent,
    CreateQuestionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
