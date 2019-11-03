import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Http} from '@angular/http';
import { Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/';
@Injectable()
export class FormateurHttpService {
  constructor( private http: Http, private  httpclient: HttpClient) { }

private extractData(res: Response) {
  let body = res;
  return body || {};
}

getFormateur(id: string): Observable<any> {
  const url = `${apiUrl}/formateur/`;
  return this.httpclient.get(url +id, httpOptions).pipe(
    map(this.extractData));
}

  getFormateurObservable(): Observable<any> {
    const url = `${apiUrl}/formateurs`;
    console.log(this.httpclient.get(url, httpOptions).pipe(map(this.extractData)));
    return this.httpclient.get(url, httpOptions).pipe(map(this.extractData));
  }

  addFormateur(formateur): Observable<any> {
	  const url = `${apiUrl}/formateur`;
    return this.httpclient.post(url, formateur, httpOptions).pipe();
  }

  deleteFormateur(formateur): Observable<any> {
   	const url = `${apiUrl}/formateur/`;
    return this.httpclient.delete(url + formateur._id, httpOptions)
       .pipe(map(this.extractData));
  }

  updateFormateur(formateur): Observable<any> {
    const url = `${apiUrl}/updateFormateur/`;
    console.log(formateur._id);
    return this.httpclient.put(url + formateur._id, formateur, httpOptions).pipe(map(this.extractData));
  }
}
