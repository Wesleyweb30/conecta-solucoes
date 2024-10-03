import { Component } from '@angular/core';
import { ProblemaFormComponent } from "../../components/problema-form/problema-form.component";
import { LocalidadeFormComponent } from "../../components/localidade-form/localidade-form.component";
import { Problema } from '../../interfaces/problema';
import { ProblemaService } from '../../services/problema/problema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problema-new',
  standalone: true,
  imports: [ProblemaFormComponent, LocalidadeFormComponent],
  templateUrl: './problema-new.component.html',
  styleUrl: './problema-new.component.css'
})
export class ProblemaNewComponent {

  constructor(private problemaService: ProblemaService, private router: Router){}

  cadastrarProblema(problema: Problema){
    this.problemaService.cadastrar(problema).subscribe(
      {
        next: (res) => {
          console.log("Cadastrou ", res.titulo);
          this.router.navigate(['/'])
        },
        error: (error) => {
          console.error("cadastro não efetuado")
        } 
      }
    )
  }

  //Limpar campo

  //Redirecionar

  //cadastrar


}
