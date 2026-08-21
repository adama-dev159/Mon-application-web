import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private apiUrl = 'http://localhost:8080/api/Personne';

  constructor(private http: HttpClient) {}

  getAllPersonnes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPersonneById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPersonne(personne: any): Observable<any> {
    return this.http.post(this.apiUrl, personne);
  }

  updatePersonne(id: number, personne: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, personne);
  }

  deletePersonne(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
