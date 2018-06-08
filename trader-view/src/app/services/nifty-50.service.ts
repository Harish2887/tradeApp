import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GOOGLE_FIN_URL} from './nifty-50.config.js';

const httpOptions = {
  headers: new HttpHeaders().append('Access-Control-Allow-Origin', '*')
};

@Injectable({
  providedIn: 'root'
})
export class Nifty50Service {
  private url: any;
  private symbol: String;
  private interval: any;
  constructor(private http: HttpClient) {
      this.url = GOOGLE_FIN_URL ;
      console.log('Access-Control-Allow-Origin:*' + this.url);
   }

  getNifty50() {
    this.url = this.url + '?q=NSE&i=600&p=1d';
    return this.http.get(this.url, httpOptions);
  }
}
