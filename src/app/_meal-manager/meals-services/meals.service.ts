import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Meal } from '../models/meal';
import { Ingredient } from '../models/ingredient';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals;
  constructor(private http: HttpClient) { }

  // ------------------------------------------------------------------------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\
  // -----------------------------------  ADMINISTRATEUR CANTINIERE SECURISE ------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\

  // ------------------------------------ Afficher tous les Plats



  findAllAvailableForToday(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/meal/findallavailablefortoday`, { responseType: 'json' })
      .pipe(
        tap(),
        catchError(this.handleError<any>('findAllAvailableForToday')),
      );
  }
  getAllMeals(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/meal/findall`, { responseType: 'json' })
      .pipe(
        map(data => {

        }),
        catchError(this.handleError<any>('getFindAll')),
      );
  }

  // ------------------------------------  Ajouter un plat
  putAddmeal(meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${environment.apiUrl}/meal/add`, meal, { responseType: 'json' })
      .pipe(
        tap((product: Meal) => console.log('meal edited')),
        catchError(this.handleError<Meal>('putAddmeal'))
      );
  }

  // ------------------------------------  Supprimer un plat
  deleteMeal(idMeal: number): Observable<Meal> {

    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('user_token')}`
    });

    return this.http.put<Meal>(`${environment.apiUrl}/meal/delete/${idMeal}`, { headers: reqHeader });
  }

  // ------------------------------------ Mettre à jour un Plat
  updateMeal(idMeal: number): Observable<Meal> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('user_token')}`
    });
    return this.http.patch<Meal>(`${environment.apiUrl}/meal/update/${idMeal}`, { headers: reqHeader });
  }


  // ------------------------------------------------------------------------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\
  // -----------------------------------  UTILISATEUR Consommateur  ---------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\



  getOneMeal(idMeal: number): Observable<Meal> {
    return this.http.get<Meal>(`${environment.apiUrl}/meal/find/${idMeal}`);
  }

  getAllMealsCurrWeek(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${environment.apiUrl}/meal/findallavailablefortoday`);
  }
  getAllMealsSpecWeek(idWeek: number): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${environment.apiUrl}/meal/findallavailableforweek/${idWeek}`);
  }



  // ----------------------------------cas d'erreur -----------------------------------------------------\\
  // ------------------------------------------------------------------------------------------------------------\\
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
