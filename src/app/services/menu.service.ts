import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private http: HttpClient, private router: Router) { }

  //fonction qui permet d'ajouter un menu
  add(): Observable<any> {
    const urlAdd = 'http://localhost:8080/lunchtime/menu/add';
    return this.http.get(urlAdd, { responseType: 'json' })
      .pipe(
        tap(menu => {
          ;
        }),
        catchError(this.handleError<any>('urlAdd')),
      );
  }


  //fonction qui permet de supprimer les menus par Id
  delete(): Observable<any> {
    const urlDelete = 'http://localhost:8080/lunchtime/menu/delete/{menuId}';
    return this.http.get(urlDelete, { responseType: 'json' })
      .pipe(
        tap(menu => {
          ;
        }),
        catchError(this.handleError<any>('urlDelete')),
      );
  }


  //fonction qui permet de mettre à jour les menus 
  update(): Observable<any> {
    const urlUpdate = 'http://localhost:8080/lunchtime//menu/update/{menuId}';
    return this.http.get(urlUpdate, { responseType: 'json' })
      .pipe(
        tap(menu => {
          ;
        }),
        catchError(this.handleError<any>('update')),
      );
  }


  //fonction qui permet de rechercher tous les menus par ID
  find(): Observable<any> {
    const urlFindId = 'http://localhost:8080/lunchtime/menu/find/{menuId}';
    return this.http.get(urlFindId, { responseType: 'json' })
      .pipe(
        tap(menu => {
          ;
        }),
        catchError(this.handleError<any>('findId')),
      );
  }


  //fonction qui permet de rechercher tous les menus du jour
  findAllAvailableForToday(): Observable<any> {
    const urlForDay = 'http://localhost:8080/lunchtime/menu/findallavailablefortoday';
    return this.http.get(urlForDay, { responseType: 'json' })
      .pipe(
        tap(menu => {
          ;
        }),
        catchError(this.handleError<any>('findAllForDay')),
      );
  }


  //fonction qui permet de rechercher tous les menus 
  findAll(): Observable<any> {
    const urlFindAll = 'http://localhost:8080/lunchtime/menu/findall';
    return this.http.get(urlFindAll, { responseType: 'json' })
      .pipe(
        tap(menu => {
          ;
        }),
        catchError(this.handleError<any>('findAll')),
      );
  }


  //fonction qui permet de rechercher tous les menus de la semaine 
  findAllAvailableForWeek(): Observable<any> {
    const urlWeek = 'http://localhost:8080/lunchtime/menu/findallavailableweek';
    return this.http.get(urlWeek, { responseType: 'json' })
      .pipe(
        tap(menu => {
          ;
        }),
        catchError(this.handleError<any>('findAllAvailableForWeek')),
      );
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