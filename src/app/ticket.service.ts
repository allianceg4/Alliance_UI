import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { TicketElement } from './models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  sampleTicket: TicketElement = {
    ticketID: 1100,
    userID: 5,
    statusID: 1001,
    subject: 'SampleSubject',
    description: 'Sample Description',
    date: '2019-06-29',
    amount: 0,
    hasconfirm: 0,
    hasproof: 0,
    transaction: 0,
    hasinvoice: 0,
    ismatched: 0,
    iscredited: 0
  }

  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  getTickets(): Observable<any> {
    return this.http
      .get(`${this.url}/tickets`, this.httpOptions)
      .pipe(
        first()
      )
  }

  getTicket(ID: any): Observable<any> {
    return this.http
      .get(`${this.url}/ticket/${ID}`, this.httpOptions)
      .pipe(
        first()
      )
  }
  
  removeticket(ID: any): Observable<any> {
    return this.http
      .delete(`${this.url}/ticket/delete/${ID}`, this.httpOptions)
      .pipe(
        first()
      )
  }

  saveTicket() {
    let body = JSON.stringify (this.sampleTicket);
    console.log(body);
    return this.http.post(`${this.url}/ticket/save`, body, this.httpOptions)
  }
}
