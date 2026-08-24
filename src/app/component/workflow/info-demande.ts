import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
@Injectable({ providedIn: 'root' }) export class InfoDemandeService { 
    private apiUrl = 'https://app-65035535-0226-45fb-893e-9502144c33ef.cleverapps.io/api/InfoDemande';
    constructor(private http: HttpClient) {} createInfoDemande(infoDemande: any): Observable<any> { 
        return this.http.post(this.apiUrl, infoDemande); } }