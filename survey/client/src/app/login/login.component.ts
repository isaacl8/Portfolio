import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _mainService: MainService, private _router: Router) { }

  ngOnInit() {
  }

  login(formData){
    this._mainService.login(formData.value)
    .then( (user) => this._router.navigate(['/dashboard']))
    .catch( (err) => console.log('there is an error!'))
  }
}
