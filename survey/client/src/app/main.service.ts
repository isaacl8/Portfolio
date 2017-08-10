import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

login(user){
    return this._http.post('/api/login', user)
    .map( data => data.json())
    .toPromise()
}

oneUser(){
    return this._http.get('/api/dashboard')
        .map( data => data.json())
        .toPromise()
}

sendQuestion(question){
    return this._http.post('/api/submitquest', question)
        .map( data => data.json())
        .toPromise()
}

getQuestions(){
    return this._http.get('/api/questionlist')
        .map( data => data.json())
        .toPromise()
}

deleteQuestion(question_id){
    return this._http.delete('/api/question/'+ question_id)
        .map( data => data.json())
        .toPromise()
}

specQuest(question_id){
    return this._http.get('/api/findquestion/' + question_id)
        .map( data => [data.json()])
        .toPromise()
}

upVote1Serv(question_id){
    return this._http.put('/api/upvote1/' + question_id, {id:question_id})
        .map( data => data.json())
        .toPromise()
}

upVote2Serv(question_id){
    return this._http.put('/api/upvote2/' + question_id, {id:question_id})
        .map( data => data.json())
        .toPromise()
}

upVote3Serv(question_id){
    return this._http.put('/api/upvote3/' + question_id, {id:question_id})
        .map( data => data.json())
        .toPromise()
}

upVote4Serv(question_id){
    return this._http.put('/api/upvote4/' + question_id, {id:question_id})
        .map( data => data.json())
        .toPromise()
}

}
