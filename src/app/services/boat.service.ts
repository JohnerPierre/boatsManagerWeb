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
  	let searchUrl = "http://localhost:5000/books";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getdBoatById(id) {
    let searchUrl = "http://localhost:5000/book?bookId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deletedBoatById(id) {
    let searchUrl = "http://localhost:5000/book?bookId=" + id;
    console.log(id);
    return this.http.delete(searchUrl).map(res => res.json());
  }

  addBoats(bookData) {
    let searchUrl = "http://localhost:5000/book";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ bookData: bookData }), options).map(res => res.json());
  }

  updatedBoat(bookData) {
    let searchUrl = "http://localhost:5000/book";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ bookData: bookData }), options).map(res => res.json());
  }
}