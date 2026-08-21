import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
@Injectable({ providedIn: 'root' }) export class InfoDemandeService { 
    private apiUrl = 'http://localhost:8080/api/InfoDemande'; 
    constructor(private http: HttpClient) {} createInfoDemande(infoDemande: any): Observable<any> { 
        return this.http.post(this.apiUrl, infoDemande); } }