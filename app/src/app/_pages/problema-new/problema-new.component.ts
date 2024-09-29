import { Component } from '@angular/core';
import { ProblemaFormComponent } from "../../components/problema-form/problema-form.component";
import { LocalidadeFormComponent } from "../../components/localidade-form/localidade-form.component";

@Component({
  selector: 'app-problema-new',
  standalone: true,
  imports: [ProblemaFormComponent, LocalidadeFormComponent],
  templateUrl: './problema-new.component.html',
  styleUrl: './problema-new.component.css'
})
export class ProblemaNewComponent {

}
