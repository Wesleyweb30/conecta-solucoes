import { Component, OnInit } from '@angular/core';
import { ProblemaCardComponent } from "../../components/problema-card/problema-card.component";
import { ProblemaService } from '../../services/problema/problema.service';
import { Problema } from '../../interfaces/problema';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProblemaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  //  problemas$ = new Observable<Problema[]>();
  problemas: Problema[] = [];
  
  constructor(private problemaService: ProblemaService){
    this.listar();
  }
  

  listar(){
    this.problemaService.listar()
      .subscribe({
        next: (res) => this.problemas = res,
        error: (error) => console.log("Erro na requisição", error)
      });
  }
}
