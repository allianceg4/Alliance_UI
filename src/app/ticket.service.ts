import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { TicketElement } from './models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets: TicketElement[] = [];

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
}
