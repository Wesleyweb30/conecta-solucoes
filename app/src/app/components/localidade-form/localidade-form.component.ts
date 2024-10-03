import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ViacepService } from '../../services/viacep/viacep.service';
import { Endereco } from '../../interfaces/endereco';

@Component({
  selector: 'app-localidade-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './localidade-form.component.html',
  styleUrl: './localidade-form.component.css'
})
export class LocalidadeFormComponent implements OnInit{
  @Output() endereco = new EventEmitter<Endereco>();
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private viacepService: ViacepService){}

  ngOnInit(): void {
    this.initForm();
    this.observeCep();
  }

  initForm() {
    this.form = this.fb.group({
      cep: ['', [Validators.required]],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    })
  }

  observeCep(){
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if (value.length == 8) {
        this.buscarCep();
      }
    })
  }

  buscarCep(){
    var cep = this.form.get('cep')?.value;
    this.viacepService.getEnderecoByCep(cep).subscribe({
      next: (res) => {
        
        this.form.patchValue({
          logradouro: res.logradouro,
          bairro: res.bairro,
          cidade: res.localidade,
          estado: res.estado,
        }),
        
        this.endereco.emit(this.form.value);
      
      },
      error: () => {
        console.log("error ao buscar o cep")
      }
    })
  }
}
