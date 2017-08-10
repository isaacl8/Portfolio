import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
questions: any[];
user;

  constructor(private _mainService: MainService) { }

  ngOnInit() {
    this.oneUser();
    console.log('ngoninit');
    this.getQuestions();
  }

  //method to grab the user also it will need to chec if the user is equal to the correct session.id

  oneUser(){
      console.log('hello from component')
      this._mainService.oneUser()
      .then( response => this.user = response )
      .catch((err) => console.log('getting the user did not work'))
  }

  getQuestions(){
      this._mainService.getQuestions()
      .then( (response) =>  {console.log(response); this.questions = response})
      .catch((err) => console.log('getting all questions did not work'))
  }
  Delete(id){
    //   this.questions.remove()
      this._mainService.deleteQuestion(id)
        .then( () => this.getQuestions())
        .catch( (err) => console.log('delete failed'))
  }

}
