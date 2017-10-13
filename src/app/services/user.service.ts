import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
	http: any;

	static get parameters() {
		return [Http];
	}

  constructor(http) {
  	this.http = http;
  }

  checkUser(userData) {
  	let searchUrl = "http://localhost:5000/userExist?userName=" +userData;
  	let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    //return this.http.get(searchUrl, JSON.stringify({ userData: userData }), options).map(res => res.json());
    return this.http.get(searchUrl).map(res => res.json());
  }

  addUser(userData) {
    let searchUrl = "http://localhost:5000/user";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ userData: userData }), options).map(res => res.json());
  }

  
}