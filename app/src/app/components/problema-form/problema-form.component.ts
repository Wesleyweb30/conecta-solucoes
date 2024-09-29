import { Component } from '@angular/core';
import { LocalidadeFormComponent } from "../localidade-form/localidade-form.component";
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-problema-form',
  standalone: true,
  imports: [LocalidadeFormComponent],
  templateUrl: './problema-form.component.html',
  styleUrl: './problema-form.component.css'
})
export class ProblemaFormComponent {
  printViacep(form : FormGroup){
    console.log(form.value)
  }
}
