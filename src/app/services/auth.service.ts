import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, shareReplay, tap} from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  register(user): Observable<any> {
    const url = 'http://localhost:8080/lunchtime/register';
    return this.http.post(url, user, {responseType: 'json'})
      .pipe(
        tap( product => {console.log(product); console.log(user); }),
        catchError(this.handleError<any>('register'))
      );
  }

  logIn(user): Observable<any> {
    const url = 'http://localhost:8080/lunchtime/login';
    return this.http.post(url, user, {observe: 'response'})
     .pipe(
       tap( token => {
         console.log(token.headers.get('Authorization'));
         localStorage.setItem('user_token', token.headers.get('Authorization'));
         console.log('Vous ètes connectés'); }),
       catchError(this.handleError<any>('logIn')),
      );
  }

  logOut() {
    localStorage.removeItem('user_token');
  }

  getDecodedToken(toknen) {
    try {
      return jwt_decode(toknen);
    } catch {
      return null;
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
