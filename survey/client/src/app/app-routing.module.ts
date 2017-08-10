import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollComponent } from './poll/poll.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/login' },
    {path: 'login',component: LoginComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path: 'poll/:id',component: PollComponent},
    {path: 'create',component: CreateQuestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
