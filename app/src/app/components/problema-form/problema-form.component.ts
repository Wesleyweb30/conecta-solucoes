import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalidadeFormComponent } from "../localidade-form/localidade-form.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Endereco } from '../../interfaces/endereco';
import { Problema } from '../../interfaces/problema';

@Component({
  selector: 'app-problema-form',
  standalone: true,
  imports: [LocalidadeFormComponent, ReactiveFormsModule],
  templateUrl: './problema-form.component.html',
  styleUrl: './problema-form.component.css'
})
export class ProblemaFormComponent implements OnInit{
  @Output() problemaDados = new EventEmitter<Problema>();
  problemaForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initproblemaForm();    
  }

  initproblemaForm(){
    this.problemaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      situacao: ['', [Validators.required]],
      endereco: this.fb.group({
        cep: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        localidade: ['', [Validators.required]],
        estado: ['', [Validators.required]],
      }),
    });
  }

  //Recendo do component localidade.component que consume a api Viacep  
  getEndereco(endereco : Endereco){
    this.problemaForm.patchValue( {endereco} );
  }

  onSubmit() {
    const dados = this.problemaForm.value;
    this.problemaDados.emit(dados);
  }

}
