import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { Camarero } from './model/camarero';
import { CamareroService } from './services/camarero.service';
import { Cliente } from './model/cliente';
import { Contacto } from './model/contacto';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  categorias:String[] = undefined;
  camarero:Camarero = undefined;
  camareros:Camarero[] = undefined;
  postCamarero:Camarero = new Camarero(208,"Ultimate camarero");
  cliente:Cliente = new Cliente(11,"Cliente antipatico");
  
  constructor(private categoriaService:CategoriaService,
              private camareroService:CamareroService,
              private clienteService:ClienteService){}

  ngOnInit(): void {

    this.categoriaService.getCategorias().subscribe(datos =>{
      //console.log(datos);
      this.categorias = datos;
    })

    this.camareroService.getCamarero(101).subscribe(data =>{
      this.camarero = data;
    })
    
    this.camareroService.getCamareros().subscribe(datos =>{
      this.camareros =datos;
    })

    this.camareroService.postCamarero(this.postCamarero).subscribe(data => console.log(data));
    
    this.clienteService.postCliente(this.cliente).subscribe(data => console.log(data));
  }

  


}
