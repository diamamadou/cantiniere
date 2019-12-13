import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }



  // ------------------------------------ Afficher un ingredient
  getIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${environment.apiUrl}ingredient/find/' + ingredient.id`);
  }

  // ------------------------------------ Afficher tous les ingredients
  getAllIngredient(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${environment.apiUrl}ingredient/findall/`);
  }

  // ------------------------------------  ajouter un ingredient
  addIngredient(idIngre: number): Observable<Ingredient> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Ingredient>(`${environment.apiUrl}ingredient/add/${idIngre}`, { headers: reqHeader });
  }

  // ------------------------------------  Mettre à jour un ingredient
  updateIngredient(idIngre: number, ingredient: Ingredient): Observable<Ingredient> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.patch<Ingredient>(`${environment.apiUrl}ingredient/update/${idIngre}`, { headers: reqHeader });
  }

  // ------------------------------------  supprimer un ingredient
  deleteIngredient(idIngre: number): Observable<Ingredient> {
    return this.http.delete<Ingredient>(`${environment.apiUrl}ingredient/delete/${idIngre}`);
  }

}
