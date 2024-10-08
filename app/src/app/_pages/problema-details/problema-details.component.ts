import { Component, OnInit } from '@angular/core';
import { ProblemaService } from '../../services/problema/problema.service';
import { Problema } from '../../interfaces/problema';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-problema-details',
  standalone: true,
  imports: [],
  templateUrl: './problema-details.component.html',
  styleUrl: './problema-details.component.css'
})
export class ProblemaDetailsComponent implements OnInit{

  problema?: Problema;

  constructor(private problemaService: ProblemaService,private route: ActivatedRoute){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.problemaService.problemaPorId(id).subscribe({
        next: (res) => this.problema = res,
        error: (error) => console.log("error ", error)
      });
  }
}
