import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Participant} from './participant';
import {Http} from '@angular/http';
import { Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class ParticipantHttpService {
  constructor( private http: Http, private  httpclient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  
  getParticipant(id: string): Observable<any> {
    const url = `${apiUrl}/participant/`;
    return this.httpclient.get(url +id, httpOptions).pipe(
      map(this.extractData));
  }
  
    getParticipantsObservable(): Observable<any> {
      const url = `${apiUrl}/participants`;
      return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
        //.subscribe();
    }
  
    addParticipant(participant): Observable<any> {
    const url = `${apiUrl}/participant`;
    return this.httpclient.post(url, participant, httpOptions)
      .pipe();
  }
  
     deleteParticipant(participant): Observable<any> {
       const url = `${apiUrl}/participant/`;
      return this.httpclient.delete(url + participant._id, httpOptions)
         .pipe(map(this.extractData));
    }
     updateParticipant(participant): Observable<any> {
       const url = `${apiUrl}/updateparticipant/`;
       return this.httpclient.put(url + participant._id, participant, httpOptions)
        .pipe(map(this.extractData));
    }
}
