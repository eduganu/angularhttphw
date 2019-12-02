import { Injectable } from '@angular/core';

import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL = 'http://10.250.5.29:8086/api/clientes/'

  constructor(private http:HttpClient) { }

  postCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.URL,cliente);
  }
}
