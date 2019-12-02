import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = 'http://10.250.5.29:8086/api/categorias'

  constructor(private http:HttpClient) { }

  //implementacion GET
  getCategorias():Observable<any>{

    // let obs:Observable<any> = this.http.get(this.URL)
    return this.http.get(this.URL)
  }

  
}
