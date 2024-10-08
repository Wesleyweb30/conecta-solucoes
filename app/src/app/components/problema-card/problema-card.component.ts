import { Component, Input } from '@angular/core';
import { Problema } from '../../interfaces/problema';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-problema-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './problema-card.component.html',
  styleUrl: './problema-card.component.css'
})
export class ProblemaCardComponent {
  @Input() problemaDados?: Problema;

}
