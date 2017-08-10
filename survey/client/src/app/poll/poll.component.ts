import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
questions: any[];
question_id: String;
vote1;
vote2;
vote3;
vote4;

  constructor(private _mainService: MainService,
                private _route: ActivatedRoute,) { }


//this is going to load the particular question
  ngOnInit() {
      this._route.params.subscribe((param) => {
          this.question_id = param.id
      })
      this.specificQuestion(this.question_id);

  }

  specificQuestion(id){
      this._mainService.specQuest(id)
      .then( (response) =>  {console.log(response); this.questions = response})
      .catch((err) => console.log('getting all questions did not work'))
  }

  upVote1(id){
      this.vote1+= 1
      this._mainService.upVote1Serv(id)
      .then( (response) => {console.log(response) ; this.specificQuestion(this.question_id);})
      .catch((err) => console.log('adding Vote1 did not work'))
  }

  upVote2(id){
      this.vote2+= 1
      this._mainService.upVote2Serv(id)
      .then( (response) => {console.log(response) ; this.specificQuestion(this.question_id);})
      .catch((err) => console.log('adding Vote2 did not work'))
  }

  upVote3(id){
      this.vote3+= 1
      this._mainService.upVote3Serv(id)
      .then( (response) => {console.log(response) ; this.specificQuestion(this.question_id);})
      .catch((err) => console.log('adding Vote3 did not work'))
  }

  upVote4(id){
      this.vote4+= 1
      this._mainService.upVote4Serv(id)
      .then( (response) => {console.log(response) ; this.specificQuestion(this.question_id);})
      .catch((err) => console.log('adding Vote4 did not work'))
  }
}
