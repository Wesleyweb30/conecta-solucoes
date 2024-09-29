import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ViacepService } from '../../services/viacep.service';
import { Viacep } from '../../interfaces/viacep';

@Component({
  selector: 'app-localidade-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './localidade-form.component.html',
  styleUrl: './localidade-form.component.css'
})
export class LocalidadeFormComponent implements OnInit{
  @Output() viacep = new EventEmitter<FormGroup>();
  form: FormGroup = new FormGroup({})

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
        this.viacep.emit(this.form);
      },
      error: () => {
        console.log("error ao buscar o cep")
      }
    })
  }
}
