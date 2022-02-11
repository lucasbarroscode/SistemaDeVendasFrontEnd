import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';



@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor() {
    this.cliente = new Cliente();
    
   }

  ngOnInit(): void {
  }

  //Data Bind que vem do template para o componente
  clicar(){
    console.log(this.cliente);
  }

}
