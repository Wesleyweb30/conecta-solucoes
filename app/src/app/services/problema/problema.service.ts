import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Problema } from '../../interfaces/problema';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  problemaUrlApi = environment.problemaUrl; 

  constructor(private http: HttpClient) { }

  cadastrar(problema: Problema): Observable<Problema>{
    return this.http.post<Problema>(this.problemaUrlApi, problema);
  }
}
