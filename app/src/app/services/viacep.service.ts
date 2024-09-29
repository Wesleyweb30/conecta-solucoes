import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Viacep } from '../interfaces/viacep';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl;

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.http.get<Viacep>(this.apiUrl + cep + "/json/").pipe(
      map((response) => {
        return response;
      })
    )
  }
}
