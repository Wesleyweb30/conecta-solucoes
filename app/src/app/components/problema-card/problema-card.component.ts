import { Component, Input } from '@angular/core';
import { Problema } from '../../interfaces/problema';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-problema-card',
  standalone: true,
  imports: [],
  templateUrl: './problema-card.component.html',
  styleUrl: './problema-card.component.css'
})
export class ProblemaCardComponent {
  @Input() problemaDados?: Problema;
}
