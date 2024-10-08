import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Endereco } from '../../interfaces/endereco';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  viaCepUrl: string = environment.viaCepUrl;

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.http.get<Endereco>(this.viaCepUrl + cep + "/json/").pipe(
      map((response) => {
        return response;
      })
    )
  }
}
