import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  constructor(private _mainService: MainService, private _router: Router) { }

  ngOnInit() {
  }

  createSubmit(formData){
      this._mainService.sendQuestion(formData.value)
      .then( (user) => this._router.navigate(['/dashboard']))
      .catch( (err) => console.log('there is an error!'))
  }
}
