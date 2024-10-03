import { Component } from '@angular/core';
import { ProblemaFormComponent } from "../../components/problema-form/problema-form.component";
import { LocalidadeFormComponent } from "../../components/localidade-form/localidade-form.component";
import { Problema } from '../../interfaces/problema';

@Component({
  selector: 'app-problema-new',
  standalone: true,
  imports: [ProblemaFormComponent, LocalidadeFormComponent],
  templateUrl: './problema-new.component.html',
  styleUrl: './problema-new.component.css'
})
export class ProblemaNewComponent {

  problemaDados(problema: Problema){
    console.log(problema)
  }

  //Limpar campo

  //Redirecionar

  //cadastrar


}
