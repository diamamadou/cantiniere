import { Injectable } from '@angular/core'; //Décorateur qui marque une classe comme disponible pour être fournie et injectée comme dépendance.
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Exécute les requêtes HTTP

import {Observable, of} from 'rxjs'; //Fournit support pour transmission messages entre éditeurs&abonnés.
import {catchError, map, tap} from 'rxjs/operators';

import { Ingredient } from '../ingredient';

@Injectable({ providedIn: 'root'})
export class IngredientsService {

private ingredientsUrl = 'http://localhost:8080/lunchtime/ingredient'; //URL API

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

constructor(
  private http: HttpClient) { }


//Get ALL Ingredients
GetIngredients(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.ingredientsUrl + '/findall')
    .pipe(
      tap(_ => this.log('Recuperation Ingredients')),        
        catchError(this.handleError<Ingredient[]>('getIngredients', []))
    );
  }

//Get Ingredients ID, Return Undefined when id not found 
getHeroNo404<Data>(id: number): Observable<Ingredient> {
  const url = '${this.ingredientUrl}/?id=${id}';
  return this.http.get<Ingredient[]>(url)
  .pipe(
    map(Ingredients => Ingredients[0]),
    tap(h => {
      const outcome = h ? 'fetched' : 'did not find';
      this.log('${outcome) hero id=${id}');
    }),
    catchError(this.handleError<Ingredient>('Get Ingredients = ${id}'))
  );
}

//Get One Ingredient
getIngredient(id: number): Observable<Ingredient> {
  const url = `${this.ingredientsUrl}/${id}`;
  return this.http.get<Ingredient>(url).pipe(
    tap(_ => this.log(`Recuperation ingredient id=${id}`)),
    catchError(this.handleError<Ingredient>('Get Ingredients id = ${id}'))
  );
}

  //////// Save methods //////////

//ADD Ingredients
addIngredient(ingredient: Ingredient): Observable<Ingredient> {
 return this.http.post<Ingredient>(this.ingredientsUrl, ingredient, this.httpOptions)
 .pipe(
   tap(() => {}),
   catchError(this.handleError<Ingredient>('addIngredient'))
 );
}

/** DELETE Ingredients */
delete(Ingredient: Ingredient | number): Observable<Ingredient> {
  const id = typeof Ingredient === 'number' ? Ingredient : Ingredient.id;
  const url = '${this.ingredientsUrl}/${id}';

  return this.http.delete<Ingredient>(url, this.httpOptions).pipe(
    tap(_ => this.log('delete hero id=${id}')),
    catchError(this.handleError<Ingredient>('deleteIngredient'))
  );
}

/*UPDATE */
update(Ingredient: Ingredient): Observable<any> {
  return this.http.put(this.ingredientsUrl, Ingredient, this.httpOptions).pipe(
    tap(_ => this.log('updated ingredient id =${ingredient.id}')),
    catchError(this.handleError<any>('updateIngredient'))
  );
}

  
  private handleError<T> (operation = 'operation', result? : T){
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

       // TODO: better job of transforming error for user consumption
       this.log(`${operation} failed: ${error.message}`);

       // Let the app keep running by returning an empty result.
       return of(result as T);
    };
  }

   /** Log a HeroService message with the MessageService */
   private log(message: string) {
  }
}
