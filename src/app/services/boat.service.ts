import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BoatService {
	http: any;

	static get parameters() {
		return [Http];
	}

  constructor(http) {
  	this.http = http;
  }

  getAllBoats() {
  	let searchUrl = "http://localhost:5000/boats";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getdBoatById(id) {
    let searchUrl = "http://localhost:5000/boat?boatId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deletedBoatById(id) {
    let searchUrl = "http://localhost:5000/boat?boatId=" + id;
    return this.http.delete(searchUrl).map(res => res.json());
  }

  addBoats(boatData) {
    let searchUrl = "http://localhost:5000/boat";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ boatData: boatData }), options).map(res => res.json());
  }

  updatedBoat(boatData) {
    let searchUrl = "http://localhost:5000/boat";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ boatData: boatData }), options).map(res => res.json());
  }
}